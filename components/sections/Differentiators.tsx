'use client'
import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const avoid = [
  'Equipos grandes donde nadie conoce tu proyecto a fondo',
  'Entregas después de meses sin ver nada',
  'Código que solo ellos pueden tocar',
  'Propuestas genéricas copy-paste',
]

const doItems = [
  'Equipo senior en cada proyecto — sin intermediarios',
  'Demos parciales cada 2 semanas desde el día 1',
  'Documentación y transferencia de conocimiento incluida',
  'Propuesta personalizada después de entender tu negocio',
]

export default function Differentiators() {
  return (
    <section id="diferencias" className="py-24" style={{ background: 'var(--cr-white)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--cr-accent)' }}>Diferenciación</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--cr-dark)', letterSpacing: '-0.02em' }}>
            Lo que nos diferencia
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden" style={{ border: '1px solid #e2e8f0' }}>
          {/* Left: avoid */}
          <motion.div
            className="p-8"
            style={{ background: '#fef9f5', borderRight: '1px solid #f0d5b8' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-lg font-semibold" style={{ fontFamily: 'Syne, sans-serif', color: '#7c3a1a' }}>Lo que evitamos</h3>
            <div className="flex flex-col gap-4">
              {avoid.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <X size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#e05a2b' }} />
                  <p style={{ fontSize: 14, color: '#78350f', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: do */}
          <motion.div
            className="p-8"
            style={{ background: '#f0f7fc', borderLeft: '1px solid rgba(69,132,171,0.2)' }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-6 text-lg font-semibold" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--cr-dark)' }}>Cómo trabajamos</h3>
            <div className="flex flex-col gap-4">
              {doItems.map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <Check size={16} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--cr-accent)' }} />
                  <p style={{ fontSize: 14, color: '#1e3a5f', lineHeight: 1.6 }}>{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
