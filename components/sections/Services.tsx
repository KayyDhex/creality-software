'use client'
import { motion } from 'framer-motion'
import { Code2, Cloud, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Desarrollo de software',
    desc: 'Construimos aplicaciones web, mobile y desktop a medida. Desde MVPs hasta sistemas de producción robustos, priorizando mantenibilidad y escalabilidad real.',
    pills: ['Web', 'Mobile iOS', 'Android', 'Desktop'],
    cta: 'Ver casos de uso',
  },
  {
    icon: Cloud,
    title: 'Infraestructura cloud',
    desc: 'Diseñamos, migramos y automatizamos infraestructura cloud. CI/CD, contenedores, observabilidad y seguridad sin compromisos.',
    pills: ['AWS', 'GCP', 'Azure', 'Terraform', 'CI/CD'],
    cta: 'Ver casos de uso',
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
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--cr-accent)' }}>Servicios</p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--cr-dark)', letterSpacing: '-0.02em' }}>
            Lo que construimos contigo
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(0,29,74,0.12)' }}
              className="relative bg-white rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300"
              style={{ border: '1px solid rgba(0,29,74,0.06)' }}
            >
              <div className="flex justify-between items-start">
                <s.icon size={40} style={{ color: 'var(--cr-accent)' }} />
                {/* placeholder for Lottie */}
                <div className="w-20 h-20 rounded-xl flex items-center justify-center" style={{ background: 'rgba(69,132,171,0.06)' }}>
                  <s.icon size={28} style={{ color: 'rgba(69,132,171,0.4)' }} />
                </div>
              </div>
              <div>
                <h3 className="mb-2" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--cr-dark)' }}>{s.title}</h3>
                <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {s.pills.map(pill => (
                  <span key={pill} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(69,132,171,0.1)', color: 'var(--cr-accent)' }}>
                    {pill}
                  </span>
                ))}
              </div>
              <a href="#contacto" className="inline-flex items-center gap-1 text-sm font-semibold group" style={{ color: 'var(--cr-accent)', textDecoration: 'none' }}>
                {s.cta} <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
