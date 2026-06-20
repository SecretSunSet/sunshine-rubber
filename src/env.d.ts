/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly RESEND_API_KEY?: string;
  readonly INQUIRY_FROM?: string;
  readonly INQUIRY_TO?: string;
  readonly PUBLIC_MESSENGER_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
