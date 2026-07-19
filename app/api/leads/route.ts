import { NextResponse } from "next/server";
import { leadSchema } from "@/lib/validations/lead";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = leadSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  const { division, fullName, businessName, email, whatsapp, ...rest } = parsed.data;

  const { budget, timeline, projectDescription, ...details } = rest as Record<string, unknown>;

  const supabase = createServerSupabaseClient();
  const { error } = await supabase.from("leads").insert({
    division,
    full_name: fullName,
    business_name: businessName ?? null,
    email,
    whatsapp,
    budget: (budget as string | undefined) ?? null,
    timeline: (timeline as string | undefined) ?? null,
    project_description: (projectDescription as string | undefined) ?? null,
    details,
  });

  if (error) {
    console.error("Failed to insert lead", error);
    return NextResponse.json(
      { ok: false, error: "We couldn't save your enquiry. Please try WhatsApp instead." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
