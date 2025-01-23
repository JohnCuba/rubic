/// <reference types="vite/client" />

interface Env {
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_KEY: string
}

declare module 'bun' {
  Env = Env
}

interface ImportMeta {
  readonly env: Env
}
