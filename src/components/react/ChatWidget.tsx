import { useState } from "react";
import styles from "./ChatWidget.module.css";

const MESSENGER_URL = import.meta.env.PUBLIC_MESSENGER_URL || "https://m.me/";

/** Messenger-style chat widget. Toggles a card; "Send" links out to Messenger. */
export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrap}>
      {open && (
        <div
          className={styles.card}
          role="dialog"
          aria-label="Chat with Sunshine Rubber"
        >
          <div className={styles.header}>
            <div className={styles.avatar}>
              <img src="/images/sunshine-logo.svg" alt="" width={34} height={34} />
            </div>
            <div className={styles.headMeta}>
              <div className={styles.headName}>Sunshine Rubber</div>
              <div className={styles.status}>
                <span className={styles.dot} />
                <span className={styles.statusText}>
                  Typically replies within an hour
                </span>
              </div>
            </div>
            <button
              type="button"
              className={styles.close}
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
          </div>

          <div className={styles.body}>
            <div className={styles.msgRow}>
              <div className={styles.msgAvatar}>
                <img src="/images/sunshine-logo.svg" alt="" width={20} height={20} />
              </div>
              <div className={styles.bubble}>
                Hi there! 👋 Thanks for reaching out to Sunshine Rubber Tech
                Resources. How can we help with your rubber or structural
                requirement?
              </div>
            </div>
          </div>

          <div className={styles.inputRow}>
            <input
              className={styles.input}
              placeholder="Type a message…"
              aria-label="Type a message"
            />
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener"
              className={styles.send}
              aria-label="Continue on Messenger"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M22 2l-7 20-4-9-9-4 20-7z"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        className={styles.launcher}
        aria-label={open ? "Close chat" : "Chat with us on Messenger"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <span className={styles.launcherClose} aria-hidden="true">
            ×
          </span>
        ) : (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.18.16.15.26.35.27.57l.05 1.78c.02.57.6.94 1.12.71l1.99-.88c.17-.07.36-.09.54-.04 1.02.28 2.1.43 3.21.43 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2z" />
            <path
              d="M5.98 14.55l2.94-4.66a1.5 1.5 0 0 1 2.17-.4l2.34 1.75c.21.16.51.16.72 0l3.16-2.4c.42-.32.97.18.69.63l-2.94 4.66a1.5 1.5 0 0 1-2.17.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63z"
              fill="#0A7CFF"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
