const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret, defineString } = require("firebase-functions/params");
const { Resend } = require("resend");

const resendApiKey = defineSecret("RESEND_API_KEY");
const inquiryTo = defineString("INQUIRY_TO", {
  default: "info@sunshinerubberph.com",
});
const inquiryFrom = defineString("INQUIRY_FROM", {
  default: "Sunshine Rubber Website <onboarding@resend.dev>",
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = {
  name: 120,
  company: 160,
  email: 254,
  requirement: 5000,
};

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;");
}

exports.inquiry = onRequest(
  {
    region: "asia-southeast1",
    secrets: [resendApiKey],
    maxInstances: 3,
  },
  async (request, response) => {
    if (request.method !== "POST") {
      response.set("Allow", "POST");
      response.status(405).json({ message: "Method not allowed." });
      return;
    }

    const body = request.body && typeof request.body === "object" ? request.body : {};
    const name = String(body.name ?? "").trim();
    const company = String(body.company ?? "").trim();
    const email = String(body.email ?? "").trim();
    const requirement = String(body.requirement ?? "").trim();

    if (!name || !company || !email || !requirement) {
      response.status(422).json({ message: "Please complete all fields." });
      return;
    }
    if (!EMAIL_RE.test(email)) {
      response.status(422).json({ message: "Please enter a valid email address." });
      return;
    }
    if (
      name.length > LIMITS.name ||
      company.length > LIMITS.company ||
      email.length > LIMITS.email ||
      requirement.length > LIMITS.requirement
    ) {
      response.status(422).json({ message: "One or more fields are too long." });
      return;
    }

    try {
      const resend = new Resend(resendApiKey.value());
      const { error } = await resend.emails.send({
        from: inquiryFrom.value(),
        to: inquiryTo.value(),
        replyTo: email,
        subject: `Website inquiry — ${company}`,
        text: [
          `Name: ${name}`,
          `Company: ${company}`,
          `Email: ${email}`,
          "",
          "Requirement:",
          requirement,
        ].join("\n"),
        html: `
          <h2>New website inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Company:</strong> ${escapeHtml(company)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Requirement:</strong></p>
          <p>${escapeHtml(requirement).replace(/\n/g, "<br>")}</p>
        `,
      });

      if (error) {
        console.error("[inquiry] Resend error:", error);
        response.status(502).json({
          message: "We couldn't send your inquiry. Please try again.",
        });
        return;
      }

      response.status(200).json({ message: "Inquiry sent." });
    } catch (error) {
      console.error("[inquiry] Unexpected error:", error);
      response.status(500).json({
        message: "We couldn't send your inquiry. Please try again.",
      });
    }
  },
);
