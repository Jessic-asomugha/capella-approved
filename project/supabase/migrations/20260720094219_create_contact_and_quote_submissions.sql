/*
# Create contact and quote submission tables (single-tenant, no auth)

1. New Tables
- `contact_submissions` — general inquiries from the Contact page
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter full name
  - `email` (text, not null) — submitter email
  - `phone` (text, nullable) — optional phone number
  - `company` (text, nullable) — optional company name
  - `subject` (text, not null) — inquiry subject
  - `message` (text, not null) — inquiry body
  - `created_at` (timestamptz, defaults to now())
- `quote_requests` — structured service quote requests from the Request a Quote page
  - `id` (uuid, primary key)
  - `name` (text, not null) — submitter full name
  - `email` (text, not null) — submitter email
  - `phone` (text, nullable) — optional phone number
  - `company` (text, nullable) — optional company name
  - `service` (text, not null) — requested service category
  - `project_location` (text, nullable) — optional project site location
  - `project_duration` (text, nullable) — optional expected duration
  - `budget` (text, nullable) — optional budget range
  - `details` (text, not null) — project description
  - `status` (text, not null, default 'new') — tracking status
  - `created_at` (timestamptz, defaults to now())

2. Security
- Enable RLS on both tables.
- Both tables are intentionally public intake forms (no sign-in screen), so allow
  anon + authenticated INSERT only. No public SELECT/UPDATE/DELETE to protect
  submitted data; reads and management happen server-side / via service role.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text NOT NULL,
  project_location text,
  project_duration text,
  budget text,
  details text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_quote" ON quote_requests;
CREATE POLICY "anon_insert_quote"
ON quote_requests FOR INSERT
TO anon, authenticated WITH CHECK (true);
