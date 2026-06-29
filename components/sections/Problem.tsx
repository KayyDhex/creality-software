'use client'
import { motion } from 'framer-motion'

const problems = [
  { quote: '"Tenemos todo en Excel y ya no da más. Necesitamos algo propio pero no sabemos por dónde."', tag: 'Digitalización de procesos' },
  { quote: '"Contratamos una agencia, nos entregaron algo que nadie puede mantener."', tag: 'Rescate y modernización' },
  { quote: '"Tenemos servidores en la oficina y deberíamos estar en cloud, pero no sabemos cómo migrar sin caer."', tag: 'Migración cloud segura' },
  { quote: '"El equipo despliega una vez al mes porque el proceso es un caos. Cada release es una aventura."', tag: 'CI/CD y automatización' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
}

export default function Problem() {
  return (
    <section id="problema" className="py-24" style={{ background: 'var(--cr-dark)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
            <motion.p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--cr-accent)' }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-60px' }}>
              ¿Te suena?
            </motion.p>
            <motion.h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--cr-white)', lineHeight: 1.15, letterSpacing: '-0.02em' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
              ¿Te suena alguna de estas?
            </motion.h2>
            <motion.p className="mt-4" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 14 }}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: 0.2 }}>
              Si la respuesta es sí, estamos hablando el mismo idioma.
            </motion.p>
          </div>

          <div className="md:col-span-3 grid sm:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <motion.div
                key={i} custom={i} variants={fadeUp} initial="hidden"
                whileInView="visible" viewport={{ once: true, margin: '-60px' }}
                className="relative rounded-xl p-6 flex flex-col gap-4 overflow-hidden group"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                whileHover={{ boxShadow: '0 0 0 1px rgba(69,132,171,0.5), 0 0 24px rgba(69,132,171,0.12)' }}
              >
                {/* Large number watermark */}
                <span className="absolute top-2 right-4 select-none pointer-events-none"
                  style={{ fontFamily: 'Syne, sans-serif', fontSize: 72, fontWeight: 700, color: 'rgba(255,255,255,0.06)', lineHeight: 1 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                <motion.p
                  className="italic flex-1 relative z-10"
                  style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.65 }}
                  whileHover={{ color: 'rgba(255,255,255,0.85)', scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  {p.quote}
                </motion.p>

                <div className="flex items-center gap-1.5 self-start group/tag">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(69,132,171,0.15)', color: 'var(--cr-accent)', border: '1px solid rgba(69,132,171,0.3)' }}>
                    {p.tag}
                  </span>
                  <span className="text-xs transition-transform duration-200 group-hover/tag:translate-x-1"
                    style={{ color: 'var(--cr-accent)' }}>→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
