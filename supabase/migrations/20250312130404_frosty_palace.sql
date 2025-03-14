/*
  # Create consultations table

  1. New Tables
    - `consultations`
      - `id` (uuid, primary key)
      - `first_name` (text, required)
      - `last_name` (text)
      - `business_name` (text)
      - `email` (text, required)
      - `phone` (text)
      - `plan` (text, required)
      - `comments` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `consultations` table
    - Add policy for inserting new consultation requests
*/

CREATE TABLE IF NOT EXISTS consultations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text,
  business_name text,
  email text NOT NULL,
  phone text,
  plan text NOT NULL,
  comments text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert new consultation requests
CREATE POLICY "Anyone can insert consultation requests"
  ON consultations
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view consultations
CREATE POLICY "Only authenticated users can view consultations"
  ON consultations
  FOR SELECT
  TO authenticated
  USING (true);