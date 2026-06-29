'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

const TICKER = ['Dev · Cloud · Colombia', 'Bogotá → Global', 'Expertos. Sin intermediarios.']

const cards = [
  {
    title: 'Infra as Code',
    top: '2%',
    rotate: { x: -4, y: 8 },
    code: `$ terraform apply

  + aws_ecs_service.api
  + aws_rds_cluster.main
  + aws_cloudfront_distribution.cdn

Apply complete! 3 added ✓`,
  },
  {
    title: 'React Component',
    top: '36%',
    rotate: { x: 2, y: -5 },
    code: `export function DataTable({ rows }) {
  const sorted = useMemo(
    () => rows.sort(byDate), [rows]
  )
  return <Table data={sorted} />
}`,
  },
  {
    title: 'Cloud Architecture',
    top: '68%',
    rotate: { x: 6, y: 4 },
    code: `Client → CloudFront → ALB
                    ↓
           ECS (API) ←→ RDS
                    ↓
              S3 + Lambda`,
  },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tick, setTick] = useState(0)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 40, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 40, damping: 18 })

  // Ticker rotation
  useEffect(() => {
    const t = setInterval(() => setTick(n => (n + 1) % TICKER.length), 3000)
    return () => clearInterval(t)
  }, [])

  // Mouse parallax
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width * 8)
      mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height * 8)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [mouseX, mouseY])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center"
      style={{ background: 'var(--grad-hero)' }}
    >
      {/* Noise grain */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.035, zIndex: 0 }}>
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
        backgroundImage: 'radial-gradient(circle, rgba(69,132,171,0.22) 1px, transparent 1px)',
        backgroundSize: '36px 36px', zIndex: 0,
      }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-5 gap-12 items-center w-full">

        {/* LEFT 58% */}
        <div className="md:col-span-3">

          {/* Ticker badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 overflow-hidden"
            style={{ border: '1px solid rgba(69,132,171,0.4)', background: 'rgba(69,132,171,0.08)', height: 34 }}>
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--cr-cta)' }} />
            <div className="relative overflow-hidden" style={{ height: 18, minWidth: 220 }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={tick}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 top-0 text-sm whitespace-nowrap"
                  style={{ color: 'rgba(255,255,255,0.75)' }}
                >
                  {TICKER[tick]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white mb-6"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(38px, 5vw, 60px)', lineHeight: 1.25, letterSpacing: '-0.025em', paddingBottom: 12, overflow: 'visible' }}
          >
            Software que resuelve<br />
            problemas{' '}
            <span className="relative inline-block" style={{ color: 'var(--cr-accent)' }}>
              reales
              <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 120 5" preserveAspectRatio="none">
                <path d="M0 3 Q30 1 60 3 Q90 5 120 3" stroke="var(--cr-accent)" strokeWidth="2" fill="none"
                  strokeDasharray="130" strokeDashoffset="130"
                  style={{ animation: 'drawLine 0.8s ease forwards 1.6s' }} />
              </svg>
              <style>{`@keyframes drawLine { to { stroke-dashoffset: 0; } }`}</style>
            </span>
            <br />de negocio
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.25 }}
            className="mb-10 max-w-lg"
            style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, lineHeight: 1.7 }}
          >
            Construimos aplicaciones y automatizamos infraestructura para empresas que ya no quieren depender de soluciones genéricas que no les quedan.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <a href="#servicios" className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold group"
              style={{ background: 'var(--grad-cta)', color: '#001d4a' }}>
              Ver cómo trabajamos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#proyectos" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white"
              style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.04)' }}>
              <Play size={14} fill="white" /> Ver proyectos
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
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

        {/* RIGHT 42% — stacked cards */}
        <div className="hidden md:flex md:col-span-2 flex-col gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="rounded-xl p-4"
              style={{
                marginLeft: i === 1 ? 24 : i === 2 ? 8 : 0,
                background: 'linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 + i * 0.15, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <p className="text-xs font-semibold mb-2" style={{ color: 'var(--cr-accent)', fontFamily: 'Syne, sans-serif' }}>{card.title}</p>
              <pre className="text-xs leading-relaxed whitespace-pre-wrap" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: 'monospace' }}>{card.code}</pre>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <ChevronDown size={20} style={{ color: 'rgba(255,255,255,0.3)' }} />
      </motion.div>
    </section>
  )
}
