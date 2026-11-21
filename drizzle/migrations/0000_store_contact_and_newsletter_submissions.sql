CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  business_email text NOT NULL,
  phone_number text,
  company_name text,
  service_interested_in text NOT NULL,
  estimated_budget text,
  project_description text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT contact_full_name_length CHECK (char_length(btrim(full_name)) BETWEEN 1 AND 120),
  CONSTRAINT contact_email_length CHECK (char_length(btrim(business_email)) BETWEEN 3 AND 255),
  CONSTRAINT contact_phone_length CHECK (phone_number IS NULL OR char_length(phone_number) <= 40),
  CONSTRAINT contact_company_length CHECK (company_name IS NULL OR char_length(company_name) <= 160),
  CONSTRAINT contact_service_length CHECK (char_length(btrim(service_interested_in)) BETWEEN 1 AND 120),
  CONSTRAINT contact_budget_length CHECK (estimated_budget IS NULL OR char_length(estimated_budget) <= 80),
  CONSTRAINT contact_project_description_length CHECK (char_length(btrim(project_description)) BETWEEN 10 AND 4000)
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can submit contact inquiries"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(btrim(full_name)) BETWEEN 1 AND 120
    AND char_length(btrim(business_email)) BETWEEN 3 AND 255
    AND char_length(btrim(service_interested_in)) BETWEEN 1 AND 120
    AND char_length(btrim(project_description)) BETWEEN 10 AND 4000
  );

CREATE TABLE public.newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  subscribed_at timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT newsletter_email_unique UNIQUE (email),
  CONSTRAINT newsletter_email_length CHECK (char_length(btrim(email)) BETWEEN 3 AND 255),
  CONSTRAINT newsletter_email_shape CHECK (email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$')
);
GRANT INSERT ON public.newsletter_subscriptions TO anon, authenticated;
GRANT ALL ON public.newsletter_subscriptions TO service_role;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Visitors can subscribe to the newsletter"
  ON public.newsletter_subscriptions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(btrim(email)) BETWEEN 3 AND 255
    AND email ~* '^[^@[:space:]]+@[^@[:space:]]+\.[^@[:space:]]+$'
  );