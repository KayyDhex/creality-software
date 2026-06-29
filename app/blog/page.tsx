import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/blog/PostCard'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const revalidate = 3600

export const metadata = {
  title: 'Blog técnico — CReality Software',
  description: 'Artículos sobre desarrollo de software, infraestructura cloud y automatización. Escritos por el equipo de CReality desde Bogotá.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      <Navbar />
      <main style={{ background: '#001d4a', minHeight: '100vh', paddingTop: '80px' }}>
        <section style={{ padding: '64px 2rem 48px', maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: '#4584ab', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 12 }}>
            Blog técnico
          </p>
          <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, letterSpacing: '-0.025em', marginBottom: 16 }}>
            Lo que aprendemos<br />construyendo cosas reales
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 480, lineHeight: 1.65 }}>
            Sin tutoriales de hello world. Casos reales, decisiones técnicas reales, y lo que resultó — bien o mal.
          </p>
        </section>

        <section style={{ padding: '0 2rem 80px', maxWidth: '900px', margin: '0 auto' }}>
          {posts.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 15 }}>
              Próximamente — el primer artículo está en camino.
            </p>
          ) : (
            <div style={{ display: 'grid', gap: 16 }}>
              {posts.map(post => <PostCard key={post.id} post={post} />)}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
