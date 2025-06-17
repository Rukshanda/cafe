import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = 'https://tdjysncgnnxljbpxrdms.supabase.co';
const supabaseKey =
 " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkanlzbmNnbm54bGpicHhyZG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2MzA4ODgsImV4cCI6MjA2NTIwNjg4OH0.1NYc7vRPTQd6hCa7WXCEw9hR1pePYmk_Syvu7jju_34";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
