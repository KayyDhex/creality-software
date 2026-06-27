const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ background: '#00122e' }} className="text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="mb-4">
              <img src="/logos/Logo blanco.svg" alt="CReality Software" height={32} style={{ height: 32, width: 'auto' }} />
            </div>
            <p style={{ color: '#64748b', fontSize: 13 }}>Software hecho para resolver, no para impresionar.</p>
            {/* Social links */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/creality.sof/"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram de CReality"
                className="p-2 rounded-lg transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/creality-software/"
                target="_blank" rel="noopener noreferrer"
                aria-label="LinkedIn de CReality"
                className="p-2 rounded-lg transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#64748b' }}>Navegación</p>
              <div className="flex flex-col gap-2">
                {['Servicios', 'Proyectos', 'Contacto'].map(l => (
                  <a key={l} href={`#${l.toLowerCase()}`} className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#64748b' }}>Contacto</p>
              <a href="mailto:contacto@creality.co" className="text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}>contacto@creality.co</a>
              <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Bogotá, Colombia · 2025</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p style={{ color: '#334155', fontSize: 12 }}>© 2025 CReality Software. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
