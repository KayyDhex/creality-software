'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Project = {
  id: string
  number: string
  name: string
  tagline: string
  description: string
  tags: string[]
  stack: string[]
  status: string
  image: string
  imageType: 'desktop' | 'mobile'
  dark?: boolean
}

const projects: Project[] = [
  {
    id: 'dreamsport',
    number: '01',
    name: 'Dreamsport',
    tagline: 'Plataforma web · Backoffice · Colombia',
    description: 'Dream Sport\'s tenía el talento y la visión, pero operaba sin una estructura digital que lo respaldara. Los procesos de inscripción eran manuales, no había forma de hacer seguimiento a los deportistas ni comunicarse con ellos a escala.\n\nConstruimos su plataforma web institucional y un backoffice completo: gestión de usuarios, inscripciones en línea, envío de correos masivos y un panel de control para que el equipo operativo trabaje sin depender de hojas de cálculo.',
    tags: ['Producto digital', 'Colombia → Europa'],
    stack: [],
    status: '',
    image: '/projects/dreamsports/Mockup_03.png',
    imageType: 'desktop',
    dark: false,
  },
  {
    id: 'tracktech',
    number: '02',
    name: 'Tracktech',
    tagline: 'App móvil iOS · Logística · GPS',
    description: 'La empresa no sabía con certeza dónde estaban sus camiones ni qué rutas tomaban. El control dependía de llamadas telefónicas y reportes manuales al final del día.\n\nDiseñamos y desarrollamos una app iOS nativa que muestra la ubicación en tiempo real de cada vehículo, el historial de rutas y permite gestionar conductores desde el celular. Hoy el equipo tiene visibilidad total de su flota sin hacer una sola llamada.',
    tags: ['App móvil', 'Logística'],
    stack: [],
    status: '',
    image: '/projects/tracktech/Mockup.png',
    imageType: 'mobile',
    dark: true,
  },
]

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const isDark = project.dark

  return (
    <motion.div
      className="rounded-2xl overflow-hidden flex flex-col h-full"
      style={{
        background: isDark ? 'var(--cr-dark)' : '#fff',
        border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid #e8ecf0',
        minHeight: featured ? 460 : 400,
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55 }}
    >
      {/* Image */}
      <div
        className="relative flex items-center justify-center flex-1"
        style={{ background: isDark ? 'rgba(0,0,0,0.15)' : '#f8f9fb', minHeight: 0 }}
      >
        <span style={{
          position: 'absolute',
          top: 8, left: 16,
          fontFamily: 'Syne, sans-serif', fontWeight: 800,
          fontSize: featured ? 108 : 80, lineHeight: 1,
          color: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,29,74,0.05)',
          userSelect: 'none', pointerEvents: 'none',
        }}>
          {project.number}
        </span>
        <Image
          src={project.image}
          alt={project.name}
          width={project.imageType === 'mobile' ? 160 : 440}
          height={project.imageType === 'mobile' ? 300 : 260}
          className="object-contain relative z-10"
          style={{
            maxHeight: project.imageType === 'mobile' ? (featured ? 260 : 220) : (featured ? 240 : 200),
            filter: isDark
              ? 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))'
              : 'drop-shadow(0 16px 40px rgba(0,0,0,0.12))',
          }}
        />
      </div>

      {/* Text */}
      <div
        className="px-6 py-5"
        style={{ borderTop: isDark ? '1px solid rgba(255,255,255,0.07)' : '1px solid #e8ecf0' }}
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(t => (
            <span key={t} className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                background: isDark ? 'rgba(69,132,171,0.15)' : 'rgba(69,132,171,0.08)',
                color: 'var(--cr-accent)',
                border: isDark ? '1px solid rgba(69,132,171,0.25)' : '1px solid rgba(69,132,171,0.2)',
              }}>
              {t}
            </span>
          ))}
        </div>
        <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: featured ? 22 : 18, color: isDark ? '#fff' : 'var(--cr-dark)', marginBottom: 4 }}>
          {project.name}
        </h3>
        <p className="mb-4" style={{ fontSize: 12, fontWeight: 600, color: isDark ? 'rgba(255,255,255,0.35)' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {project.tagline}
        </p>
        <div style={{ fontSize: 13, color: isDark ? 'rgba(255,255,255,0.55)' : '#475569', lineHeight: 1.75 }}>
          {project.description.split('\n\n').map((para, i, arr) => (
            <p key={i} style={{ marginBottom: i < arr.length - 1 ? 10 : 0 }}>{para}</p>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="proyectos" className="py-24" style={{ background: 'var(--cr-gray)' }}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--cr-accent)' }}>
            Proyectos
          </p>
          <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--cr-dark)', letterSpacing: '-0.02em' }}>
            Lo que hemos construido
          </h2>
        </motion.div>

        {/* Featured + sidebar */}
        <div className="grid md:grid-cols-5 gap-4 mb-4">
          <div className="md:col-span-3">
            <ProjectCard project={featured} featured />
          </div>
          {rest.length > 0 && (
            <div className="md:col-span-2 flex flex-col gap-4">
              {rest.slice(0, 2).map(p => (
                <div key={p.id} style={{ flex: 1 }}>
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Extra projects (3+) — grid de 3 */}
        {rest.length > 2 && (
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {rest.slice(2).map(p => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ color: '#94a3b8', fontSize: 14, marginBottom: 16 }}>¿Tienes un proyecto en mente?</p>
          <a href="#contacto" className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold"
            style={{ background: 'var(--grad-cta)', color: '#001d4a' }}>
            Hablemos →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
