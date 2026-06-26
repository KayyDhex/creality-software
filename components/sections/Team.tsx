'use client'
import { motion } from 'framer-motion'
import { ExternalLink, GitBranch } from 'lucide-react'

const team = [
  {
    initials: 'JD',
    name: 'Juan Dev',
    role: 'Desarrollo · Web · Mobile · Desktop',
    bio: 'Lleva 10 años construyendo software que la gente usa de verdad. Odia el código que solo el autor entiende.',
    gradient: 'linear-gradient(135deg, #001d4a, #4584ab)',
  },
  {
    initials: 'MC',
    name: 'Miguel Cloud',
    role: 'Infraestructura · AWS · GCP · Azure',
    bio: 'Especialista en hacer que los sistemas no caigan. Ha migrado a cloud cosas que "nunca se podían migrar".',
    gradient: 'linear-gradient(135deg, #0a2d5e, #2d6b8f)',
  },
]

export default function Team() {
  return (
    <section id="nosotros" className="py-24" style={{ background: 'var(--cr-white)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--cr-accent)' }}>El equipo</p>
          <h2 className="mb-4" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--cr-dark)', letterSpacing: '-0.02em' }}>
            Los fundadores
          </h2>
          <p className="max-w-xl mx-auto" style={{ color: '#64748b', fontSize: 15 }}>
            Los fundadores y cara de CReality. Llevan años resolviendo problemas técnicos complejos — y decidieron construir algo propio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {team.map((p, i) => (
            <motion.div
              key={i}
              className="rounded-2xl p-8 flex flex-col items-center text-center gap-4"
              style={{ background: 'var(--cr-gray)', border: '1px solid rgba(0,29,74,0.06)' }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                style={{ background: p.gradient, fontFamily: 'Syne, sans-serif' }}>
                {p.initials}
              </div>
              <div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--cr-dark)', fontSize: 18 }}>{p.name}</h3>
                <p className="mt-1 text-xs font-semibold" style={{ color: 'var(--cr-accent)' }}>{p.role}</p>
              </div>
              <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.65 }}>{p.bio}</p>
              <div className="flex gap-3 mt-1">
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-white transition-colors" style={{ color: '#64748b' }}>
                  <ExternalLink size={16} />
                </a>
                <a href="#" aria-label="GitHub" className="p-2 rounded-lg hover:bg-white transition-colors" style={{ color: '#64748b' }}>
                  <GitBranch size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
