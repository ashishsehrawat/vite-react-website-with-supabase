/*
  # Create initial database schema

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `message` (text)
      - `created_at` (timestamp)
    - `reviews`
      - `id` (uuid, primary key)
      - `name` (text)
      - `review` (text)
      - `rating` (integer)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on both tables
    - Add policies for inserting and reading data
*/

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for all users" ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Enable read access for all users" ON contact_submissions
  FOR SELECT
  TO public
  USING (true);

-- Reviews Table
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

-- Insert initial reviews
INSERT INTO reviews (name, review, rating) VALUES
  ('Sarah M.', 'Incredible experience! The tarot reading was spot-on and provided me with much-needed clarity. Highly recommend!', 5),
  ('Raj P.', 'The astrological insights were incredibly accurate and helped me make some important life decisions. Very professional service.', 5),
  ('Emma L.', 'Amazing spiritual guidance. The numerology reading was eye-opening and helped me understand my life path better.', 4),
  ('Michael K.', 'Very insightful palm reading session. The reader was knowledgeable and made me feel comfortable throughout.', 5),
  ('Priya S.', 'The aura cleansing session was transformative. I felt lighter and more energized immediately after. The spiritual guidance provided was invaluable.', 5),
  ('David W.', 'Had a wonderful experience with the numerology reading. The insights about my life path number were incredibly accurate and helpful.', 5),
  ('Lisa R.', 'The combination of tarot and astrology reading gave me a comprehensive understanding of my current situation. Very professional and insightful.', 4),
  ('James T.', 'Exceptional palm reading session. The reader was able to identify key life events and provided guidance for future decisions.', 5),
  ('Sophia K.', 'The spiritual remedies suggested have made a significant positive impact on my life. Grateful for the guidance and support.', 5),
  ('Arun M.', 'Very detailed and accurate tarot reading. The predictions and insights have been spot on. Will definitely come back for more sessions.', 5),
  ('Nina P.', 'The energy healing and aura cleansing helped me overcome a difficult period in my life. Highly recommended!', 4),
  ('Mark L.', 'Incredible insight into my career path through numerology and tarot combination. The guidance has been invaluable.', 5);