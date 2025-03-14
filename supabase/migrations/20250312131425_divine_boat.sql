/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text)
      - `message` (text, required)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `contacts` table
    - Add policy for public to insert contacts
    - Add policy for authenticated users to view contacts
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new contact messages
CREATE POLICY "Anyone can insert contact messages"
  ON contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view contacts
CREATE POLICY "Only authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);