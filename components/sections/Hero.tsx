'use client'
import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

const floatingCards = [
  { title: 'API Gateway', code: 'rate_limit: 1000/min\nauth: Bearer JWT\nregion: us-east-1', color: '#0a2d5e', top: '5%', delay: 0 },
  { title: 'CI/CD Pipeline', code: 'build → test → deploy\n✓ 42 tests passed\n⬡ Docker push latest', color: '#001d4a', top: '38%', delay: 0.15 },
  { title: 'Infra as Code', code: 'terraform apply\n+ 3 resources\n~ 1 updated', color: '#0d3060', top: '68%', delay: 0.3 },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.015)
      mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.015)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--grad-hero)' }}
    >
      {/* Noise grain overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Dot grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(69,132,171,0.25) 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-5 gap-12 items-center">
        {/* Left: text (60%) */}
        <div className="md:col-span-3">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-sm"
            style={{ border: '1px solid rgba(69,132,171,0.4)', color: 'rgba(255,255,255,0.7)', background: 'rgba(69,132,171,0.08)' }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: 'var(--cr-accent)' }} />
            Dev · Cloud · Infraestructura
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white mb-6"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.08, letterSpacing: '-0.025em' }}
          >
            Software que resuelve<br />
            problemas{' '}
            <span className="relative inline-block" style={{ color: 'var(--cr-accent)' }}>
              reales
              <svg className="absolute -bottom-1 left-0 w-full" height="4" viewBox="0 0 100 4" preserveAspectRatio="none">
                <path d="M0 2 Q50 4 100 2" stroke="var(--cr-accent)" strokeWidth="2" fill="none"
                  strokeDasharray="120" strokeDashoffset="120"
                  style={{ animation: 'drawLine 0.8s ease forwards 1.8s' }} />
              </svg>
              <style>{`@keyframes drawLine { to { stroke-dashoffset: 0; } }`}</style>
            </span>
            <br />de negocio
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.35 }}
            className="mb-10 max-w-lg"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, lineHeight: 1.7 }}
          >
            Construimos aplicaciones y automatizamos infraestructura para empresas que ya no quieren depender de soluciones genéricas que no les quedan.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a
              href="#servicios"
              className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold group"
              style={{ background: 'var(--grad-cta)', color: '#001d4a' }}
            >
              Ver cómo trabajamos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white"
              style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.04)' }}
            >
              <Play size={14} fill="white" />
              Ver proyectos
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="flex flex-wrap gap-8"
          >
            {[
              { top: 'Dev + Cloud', bottom: 'Las dos líneas bajo un mismo techo' },
              { top: '3 clouds', bottom: 'AWS · GCP · Azure' },
              { top: 'Tu código', bottom: 'Sin vendor lock-in' },
            ].map((s, i) => (
              <div key={i}>
                <p style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 18, color: 'var(--cr-white)' }}>{s.top}</p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>{s.bottom}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: floating cards (40%) */}
        <div className="hidden md:block md:col-span-2 relative h-[460px]">
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              className="absolute w-full rounded-xl p-4"
              style={{
                top: card.top,
                right: 0,
                background: `linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))`,
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + card.delay, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-xs font-semibold mb-2" style={{ color: 'var(--cr-accent)', fontFamily: 'Syne, sans-serif' }}>{card.title}</p>
              <pre className="text-xs leading-relaxed whitespace-pre-wrap" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>{card.code}</pre>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <ChevronDown size={20} style={{ color: 'rgba(255,255,255,0.3)' }} />
      </motion.div>
    </section>
  )
}
