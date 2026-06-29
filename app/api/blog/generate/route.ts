import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// ponytail: secret-guarded endpoint — never auto-publishes
export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-blog-secret')
  if (secret !== process.env.BLOG_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { topic, context } = await req.json()
  if (!topic) return NextResponse.json({ error: 'topic required' }, { status: 400 })

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) return NextResponse.json({ error: 'ANTHROPIC_API_KEY not set' }, { status: 500 })

  // Call Claude to generate the post
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': apiKey, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      messages: [{
        role: 'user',
        content: `Eres el equipo técnico de CReality Software (una consultora de software e infraestructura cloud en Bogotá). Escribe un artículo de blog técnico en español sobre: "${topic}".${context ? `\n\nContexto adicional: ${context}` : ''}

Formato de respuesta (JSON estricto, sin markdown wrapper):
{
  "title": "...",
  "slug": "...",
  "excerpt": "Una línea que engancha al lector",
  "content": "El artículo completo en Markdown...",
  "tags": ["tag1", "tag2"],
  "reading_time": 5
}

El artículo debe: tener entre 600-1200 palabras, usar h2/h3 para estructura, incluir al menos un bloque de código real, y ser práctico (no teórico).`,
      }],
    }),
  })

  const data = await res.json()
  const raw = data.content?.[0]?.text
  if (!raw) return NextResponse.json({ error: 'No content from Claude' }, { status: 500 })

  let post: Record<string, unknown>
  try { post = JSON.parse(raw) } catch {
    // Try to extract JSON from the response if wrapped
    const match = raw.match(/\{[\s\S]+\}/)
    if (!match) return NextResponse.json({ error: 'Could not parse Claude response' }, { status: 500 })
    post = JSON.parse(match[0])
  }

  const { data: inserted, error } = await supabase
    .from('posts')
    .insert([{ ...post, published: false }])
    .select('slug, title')
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true, slug: inserted.slug, title: inserted.title })
}
