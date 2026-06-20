import { useState } from "react";
import styles from "./ContactForm.module.css";

type Field = "name" | "company" | "email" | "requirement";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.company.trim()) errors.company = "Enter your company.";
  if (!values.email.trim()) errors.email = "Enter your email.";
  else if (!EMAIL_RE.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (!values.requirement.trim())
    errors.requirement = "Tell us what you need.";
  return errors;
}

/** Inquiry form. Validates client-side, then POSTs to /api/inquiry. */
export default function ContactForm() {
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    company: "",
    email: "",
    requirement: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string>("");

  const update = (field: Field) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          requirement: values.requirement.trim(),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Something went wrong.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(
        err instanceof Error
          ? err.message
          : "We couldn't send your inquiry. Please try again or email us directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className={styles.card}>
        <div className={styles.successWrap}>
          <h3 className={styles.successTitle}>Inquiry sent — thank you.</h3>
          <p className={styles.successText}>
            We've received your requirement and will get back to you with a quote.
            For anything urgent, call 7002-4927 or 0925-544-6200.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className={styles.card} onSubmit={onSubmit} noValidate>
      <h3 className={styles.heading}>Send an inquiry</h3>
      <div className={styles.fields}>
        <label className={styles.field}>
          <span className={styles.label}>Name</span>
          <input
            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
            placeholder="Your name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Company</span>
          <input
            className={`${styles.input} ${errors.company ? styles.inputError : ""}`}
            placeholder="Company name"
            value={values.company}
            onChange={update("company")}
            aria-invalid={!!errors.company}
          />
          {errors.company && (
            <span className={styles.errorText}>{errors.company}</span>
          )}
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Email</span>
          <input
            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
            type="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Requirement</span>
          <textarea
            className={`${styles.textarea} ${errors.requirement ? styles.inputError : ""}`}
            rows={4}
            placeholder="Tell us the product and specifications you need"
            value={values.requirement}
            onChange={update("requirement")}
            aria-invalid={!!errors.requirement}
          />
          {errors.requirement && (
            <span className={styles.errorText}>{errors.requirement}</span>
          )}
        </label>

        {status === "error" && (
          <div className={`${styles.banner} ${styles.bannerError}`} role="alert">
            {serverError}
          </div>
        )}

        <button
          type="submit"
          className={styles.submit}
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}
