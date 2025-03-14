/*
  # Update consultations table

  1. Changes
    - Rename 'plan' column to 'service'
    - Update column description to reflect service selection

  2. Security
    - Maintain existing RLS policies
*/

DO $$ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'consultations' AND column_name = 'plan'
  ) THEN
    ALTER TABLE consultations RENAME COLUMN plan TO service;
  END IF;
END $$;