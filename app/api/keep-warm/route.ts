import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase/server";

// Supabase pauses free-tier projects after roughly a week without database
// activity. The lead form is the only thing here that touches the database, so
// a quiet week pauses the project, the pause breaks the form, and a broken form
// guarantees the next quiet week. This cron breaks that cycle with one trivial
// read a day.
//
// It prevents a pause; it cannot undo one. If the project is already paused
// this returns 500 and the project has to be resumed from the Supabase
// dashboard.

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  // Vercel sends `Authorization: Bearer $CRON_SECRET` when CRON_SECRET is set
  // on the project. Unset, the route still works so the cron is never silently
  // dead — but set it, otherwise anyone can call this.
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const supabase = createServerSupabaseClient();
    const { error } = await supabase.from("leads").select("id").limit(1);

    if (error) {
      console.error("Keep-warm query failed", error);
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, checkedAt: new Date().toISOString() });
  } catch (err) {
    console.error("Keep-warm could not reach Supabase", err);
    return NextResponse.json({ ok: false, error: "Supabase unreachable" }, { status: 500 });
  }
}
