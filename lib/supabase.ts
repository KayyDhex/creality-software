import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

export const supabase = createClient(url, key)

export type ContactSubmission = {
  id?: string
  created_at?: string
  full_name: string
  email: string
  company: string
  phone?: string
  country?: string
  services: string[]
  message: string
}
