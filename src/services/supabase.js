import { createClient } from "@supabase/supabase-js"

export const supabaseUrl = "https://bgdgarmvribtipudkhwz.supabase.co"
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnZGdhcm12cmlidGlwdWRraHd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0NTMyNzMsImV4cCI6MjA0NTAyOTI3M30.G2P1zougGWa-XSGRHf35kPQDkzzJTBw6EA7fJBgajZo"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
