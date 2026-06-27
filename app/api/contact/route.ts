import { NextRequest, NextResponse } from 'next/server'
import { supabase, type ContactSubmission } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const body: ContactSubmission = await req.json()

  const { full_name, email, company, message, services } = body
  if (!full_name || !email || !company || !message || !services?.length) {
    return NextResponse.json({ error: 'Campos requeridos incompletos.' }, { status: 400 })
  }

  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY) {
    // ponytail: no-op until Supabase is wired up — log and return success so form works in dev
    console.log('[contact] Supabase not configured. Submission:', body)
    return NextResponse.json({ ok: true })
  }

  const { error } = await supabase.from('contact_submissions').insert([body])
  if (error) {
    console.error('[contact] Supabase error:', error)
    return NextResponse.json({ error: 'Error al guardar el mensaje.' }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
