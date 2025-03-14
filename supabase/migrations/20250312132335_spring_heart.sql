/*
  # Add newsletter subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
  
  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for public inserts
    - Add policy for authenticated users to view subscribers
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe to the newsletter
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view subscribers
CREATE POLICY "Only authenticated users can view subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);