import type { Post } from '@/lib/posts'
import TagBadge from './TagBadge'

function fmt(d: string) {
  return new Date(d).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function PostHeader({ post }: { post: Post }) {
  return (
    <header className="mb-12">
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map(t => <TagBadge key={t} tag={t} />)}
      </div>
      <h1 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 4vw, 48px)', color: '#fff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: 16 }}>
        {post.title}
      </h1>
      {post.excerpt && (
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: 24 }}>{post.excerpt}</p>
      )}
      <div className="flex items-center gap-4 text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
        <span>{post.author}</span>
        <span>·</span>
        {post.published_at && <span>{fmt(post.published_at)}</span>}
        {post.reading_time && <><span>·</span><span>{post.reading_time} min de lectura</span></>}
      </div>
      {post.cover_image && (
        <img src={post.cover_image} alt={post.title}
          className="w-full rounded-2xl mt-8 object-cover" style={{ maxHeight: 400 }} />
      )}
      <div className="mt-10" style={{ borderBottom: '0.5px solid rgba(255,255,255,0.08)' }} />
    </header>
  )
}
