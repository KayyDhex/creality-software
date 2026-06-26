'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Nosotros', href: '#nosotros' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={scrolled ? {
          backdropFilter: 'blur(12px)',
          background: 'rgba(0,29,74,0.85)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        } : { background: 'transparent' }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-baseline gap-1" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22, color: 'var(--cr-white)', textDecoration: 'none' }}>
            <span style={{ color: 'var(--cr-accent)' }}>C</span>Reality
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--cr-accent)', display: 'inline-block', margin: '0 4px 3px' }} />
            <span style={{ color: '#94a3b8', fontSize: 13, fontWeight: 400, fontFamily: 'Inter, sans-serif' }}>software</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="nav-link text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>
                {l.label}
              </a>
            ))}
            <a href="#contacto" className="btn-shimmer px-5 py-2 rounded-lg text-sm font-semibold text-white" style={{ background: 'var(--grad-accent)', textDecoration: 'none' }}>
              Hablemos
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex-1 bg-black/50" onClick={() => setOpen(false)} />
            <motion.div
              className="w-64 h-full flex flex-col gap-6 p-8 pt-24"
              style={{ background: 'var(--cr-dark)' }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-lg font-medium" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'none' }} onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              ))}
              <a href="#contacto" className="btn-shimmer px-5 py-3 rounded-lg text-sm font-semibold text-white text-center mt-4" style={{ background: 'var(--grad-accent)', textDecoration: 'none' }} onClick={() => setOpen(false)}>
                Hablemos
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
