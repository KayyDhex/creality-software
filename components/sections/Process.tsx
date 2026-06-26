'use client'
import { motion } from 'framer-motion'
import { Phone, FileText, Rocket, CheckCircle } from 'lucide-react'

const steps = [
  { num: '01', icon: Phone, title: 'Llamada de diagnóstico', desc: '30 minutos. Entendemos el problema, no vendemos.' },
  { num: '02', icon: FileText, title: 'Propuesta en 48h', desc: 'Alcance, cronograma e inversión. Sin letra pequeña.' },
  { num: '03', icon: Rocket, title: 'Primer sprint', desc: 'En 2 semanas ya tienes algo funcional para ver.' },
  { num: '04', icon: CheckCircle, title: 'Entrega y soporte', desc: 'El proyecto es tuyo. Quedamos si nos necesitas.' },
]

export default function Process() {
  return (
    <section id="proceso" className="py-24" style={{ background: 'var(--cr-gray)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--cr-accent)' }}>Proceso</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--cr-dark)', letterSpacing: '-0.02em' }}>
            Cómo arranca un proyecto
          </h2>
        </motion.div>

        {/* Steps + connector */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px" style={{ background: 'rgba(69,132,171,0.2)' }}>
            <motion.div
              className="h-full origin-left"
              style={{ background: 'var(--cr-accent)' }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative z-10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'var(--cr-white)', border: '1px solid rgba(69,132,171,0.2)', boxShadow: '0 4px 16px rgba(0,29,74,0.08)' }}>
                  <s.icon size={28} style={{ color: 'var(--cr-accent)' }} />
                </div>
                <p className="mb-1 text-4xl font-bold" style={{ fontFamily: 'Syne, sans-serif', color: 'rgba(69,132,171,0.2)' }}>{s.num}</p>
                <h3 className="mb-2 font-semibold" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--cr-dark)', fontSize: 16 }}>{s.title}</h3>
                <p style={{ color: '#64748b', fontSize: 14, lineHeight: 1.65 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
