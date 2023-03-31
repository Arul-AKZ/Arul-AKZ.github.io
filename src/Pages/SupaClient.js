import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.REACT_APP_URL_SUPABASE
const supabaseAnonKey = import.meta.env.REACT_APP_API_KEY_SUPABASE

export const supabase = createClient("https://liziirdsezphhyfipend.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpemlpcmRzZXpwaGh5ZmlwZW5kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODAyMjg4NjEsImV4cCI6MTk5NTgwNDg2MX0.qc-9MBZJ406plinOQFcTHige0-k9o_bWBeLey45D7Cc")