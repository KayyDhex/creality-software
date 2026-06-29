import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { notFound } from 'next/navigation'
import PostHeader from '@/components/blog/PostHeader'
import MDXContent from '@/components/blog/MDXContent'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} — CReality Software`,
    description: post.excerpt ?? undefined,
    openGraph: { title: post.title, description: post.excerpt ?? undefined, images: post.cover_image ? [post.cover_image] : [] },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      <Navbar />
      <main style={{ background: '#001d4a', minHeight: '100vh', paddingTop: '80px' }}>
        <article style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 2rem 80px' }}>
          <PostHeader post={post} />
          <MDXContent content={post.content ?? ''} />
        </article>
      </main>
      <Footer />
    </>
  )
}
