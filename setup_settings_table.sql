-- Create the settings table
CREATE TABLE IF NOT EXISTS settings (
  id BIGINT PRIMARY KEY DEFAULT 1,
  min_booking_length INTEGER NOT NULL DEFAULT 3,
  max_booking_length INTEGER NOT NULL DEFAULT 30,
  max_guests_per_booking INTEGER NOT NULL DEFAULT 10,
  breakfast_price DECIMAL(10,2) NOT NULL DEFAULT 15.00,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert the initial settings row (only if it doesn't exist)
INSERT INTO settings (id, min_booking_length, max_booking_length, max_guests_per_booking, breakfast_price)
VALUES (1, 3, 30, 10, 15.00)
ON CONFLICT (id) DO NOTHING;

-- Enable Row Level Security (optional but recommended)
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow all operations (adjust as needed for your security requirements)
CREATE POLICY "Enable all operations for settings" ON settings
FOR ALL USING (true);
