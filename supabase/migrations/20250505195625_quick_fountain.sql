/*
  # Create reviews table

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key)
      - `name` (text)
      - `review` (text)
      - `rating` (integer)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `reviews` table
    - Add policies for inserting and reading reviews
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  review text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for authenticated users" ON reviews
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON reviews
  FOR SELECT
  TO public
  USING (true);

-- Insert some initial reviews
INSERT INTO reviews (name, review, rating) VALUES
  ('Sarah M.', 'Incredible experience! The tarot reading was spot-on and provided me with much-needed clarity. Highly recommend!', 5),
  ('Raj P.', 'The astrological insights were incredibly accurate and helped me make some important life decisions. Very professional service.', 5),
  ('Emma L.', 'Amazing spiritual guidance. The numerology reading was eye-opening and helped me understand my life path better.', 4),
  ('Michael K.', 'Very insightful palm reading session. The reader was knowledgeable and made me feel comfortable throughout.', 5);