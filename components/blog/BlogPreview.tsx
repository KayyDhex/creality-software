import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import TagBadge from './TagBadge'

function fmt(d: string) {
  return new Date(d).toLocaleDateString('es-CO', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default async function BlogPreview() {
  const posts = await getAllPosts()
  if (!posts.length) return null

  const latest = posts.slice(0, 3)

  return (
    <section className="py-24" style={{ background: '#00122e' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--cr-accent)' }}>Blog técnico</p>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(24px, 3vw, 36px)', color: '#fff', letterSpacing: '-0.02em' }}>
              Del taller
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold" style={{ color: 'var(--cr-accent)', textDecoration: 'none' }}>
            Ver todos →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {latest.map(post => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="blog-preview-card-link" style={{ textDecoration: 'none' }}>
              <article className="blog-preview-card group rounded-xl p-5 flex flex-col gap-3 h-full">
                {post.tags[0] && <TagBadge tag={post.tags[0]} />}
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 17, color: '#fff', lineHeight: 1.35 }}>
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="line-clamp-2" style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>
                )}
                <div className="flex items-center justify-between mt-auto pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
                    {post.published_at ? fmt(post.published_at) : ''}
                  </span>
                  <span className="text-xs font-semibold transition-transform group-hover:translate-x-1" style={{ color: '#4584ab' }}>
                    Leer →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
