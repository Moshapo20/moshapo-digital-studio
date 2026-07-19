create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  division text not null check (division in ('website', 'branding', 'technology')),
  full_name text not null,
  business_name text,
  email text not null,
  whatsapp text not null,

  status text not null default 'new' check (status in ('new', 'contacted', 'quoted', 'won', 'lost')),
  notes text,

  details jsonb not null default '{}'::jsonb,

  project_description text,
  budget text,
  timeline text
);

create index leads_division_idx on public.leads (division);
create index leads_created_at_idx on public.leads (created_at desc);

alter table public.leads enable row level security;
-- No anon policies: only the server (service role key, used in
-- app/api/leads/route.ts) may write. Leads are reviewed via Supabase Studio.
