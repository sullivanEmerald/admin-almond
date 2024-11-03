// vite-env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLOUD_NAME: string;
  readonly VITE_API_KEY: string;
  readonly VITE_API_SECRET: string;
  // Add other variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
