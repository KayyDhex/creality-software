import Link from 'next/link'
import type { Post } from '@/lib/posts'
import TagBadge from './TagBadge'

function fmt(d: string) {
  return new Date(d).toLocaleDateString('es-CO', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="post-card-link" style={{ textDecoration: 'none' }}>
      <article className="post-card group rounded-2xl p-6 flex flex-col gap-4">
        {post.cover_image && (
          <img src={post.cover_image} alt={post.title}
            className="w-full rounded-xl object-cover" style={{ height: 200 }} />
        )}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map(t => <TagBadge key={t} tag={t} />)}
        </div>
        <div>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', lineHeight: 1.3, marginBottom: 8 }}>
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="line-clamp-2" style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
              {post.excerpt}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between mt-auto pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
            {post.published_at ? fmt(post.published_at) : ''}
            {post.reading_time ? ` · ${post.reading_time} min` : ''}
          </span>
          <span className="text-sm font-semibold transition-transform group-hover:translate-x-1" style={{ color: '#4584ab' }}>
            Leer →
          </span>
        </div>
      </article>
    </Link>
  )
}
