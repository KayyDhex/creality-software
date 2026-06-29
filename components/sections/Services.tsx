'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const DevIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 15L7 20L13 25" stroke="#4584ab" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M27 15L33 20L27 25" stroke="#4584ab" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 12L17 28" stroke="#4584ab" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const CloudIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="3" stroke="#4584ab" strokeWidth="1.5"/>
    <circle cx="8" cy="14" r="2" stroke="#4584ab" strokeWidth="1.5"/>
    <circle cx="32" cy="14" r="2" stroke="#4584ab" strokeWidth="1.5"/>
    <circle cx="8" cy="26" r="2" stroke="#4584ab" strokeWidth="1.5"/>
    <circle cx="32" cy="26" r="2" stroke="#4584ab" strokeWidth="1.5"/>
    <path d="M10 14.5L17 18.5M22.5 18.5L30 14.5M10 25.5L17 21.5M22.5 21.5L30 25.5" stroke="#4584ab" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const services = [
  {
    Icon: DevIcon,
    title: 'Desarrollo de software',
    desc: 'Construimos aplicaciones web, mobile y desktop a medida. Desde MVPs hasta sistemas de producción robustos, priorizando mantenibilidad y escalabilidad real.',
    pills: ['Web', 'Mobile iOS', 'Android', 'Desktop'],
    results: [
      'Tu equipo despliega sin miedo',
      'El código es tuyo y está documentado',
      'Ves avances cada 2 semanas, no al final',
    ],
  },
  {
    Icon: CloudIcon,
    title: 'Infraestructura cloud',
    desc: 'Diseñamos, migramos y automatizamos infraestructura cloud. CI/CD, contenedores, observabilidad y seguridad sin compromisos.',
    pills: ['AWS', 'GCP', 'Azure', 'Terraform', 'CI/CD'],
    results: [
      'Tu infra no falla los viernes',
      'Costos cloud optimizados desde el mes 1',
      'Cualquier dev de tu equipo entiende la infra',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
}

export default function Services() {
  return (
    <section id="servicios" className="py-24" style={{ background: 'var(--cr-gray)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--cr-accent)' }}>Servicios</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--cr-dark)', letterSpacing: '-0.02em' }}>
            Lo que construimos contigo
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div key={i} custom={i} variants={fadeUp} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,29,74,0.12)' }}
              className="relative bg-white rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300"
              style={{ border: '1px solid rgba(0,29,74,0.06)' }}>

              <div className="flex justify-between items-start">
                <s.Icon />
              </div>

              <div>
                <h3 className="mb-2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--cr-dark)' }}>{s.title}</h3>
                <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {s.pills.map(pill => (
                  <span key={pill} className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(69,132,171,0.1)', color: 'var(--cr-accent)' }}>{pill}</span>
                ))}
              </div>

              {/* Results */}
              <div className="flex flex-col gap-2 pt-2 border-t" style={{ borderColor: 'rgba(0,29,74,0.06)' }}>
                {s.results.map((r, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Check size={13} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--cr-accent)' }} />
                    <span style={{ fontSize: 13, color: '#475569' }}>{r}</span>
                  </div>
                ))}
              </div>

              <a href="#contacto" className="inline-flex items-center gap-1 text-sm font-semibold group self-start"
                style={{ color: 'var(--cr-accent)', textDecoration: 'none' }}>
                Ver casos de uso <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
