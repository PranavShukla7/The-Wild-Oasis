import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wkztpceowgpsbflkyktb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndrenRwY2Vvd2dwc2JmbGt5a3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1ODIyNDIsImV4cCI6MjA4MDE1ODI0Mn0.1AhdcB4_jO-xDtnl047ZAC33m7ztbvG3kO85JpyPU4I";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
