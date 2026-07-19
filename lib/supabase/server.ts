import { createClient } from "@supabase/supabase-js";

// Server-only: uses the service role key and must never be imported from a
// client component. Only import this from route handlers / server code.

export function createServerSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("Supabase server environment variables are not configured.");
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
}
