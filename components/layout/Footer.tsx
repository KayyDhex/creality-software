export default function Footer() {
  return (
    <footer style={{ background: '#00122e' }} className="text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-xs">
            <div className="flex items-baseline gap-1 mb-3" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 22 }}>
              <span style={{ color: 'var(--cr-accent)' }}>C</span>Reality
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--cr-accent)', display: 'inline-block', margin: '0 4px 3px' }} />
              <span style={{ color: '#64748b', fontSize: 13, fontWeight: 400, fontFamily: 'Inter, sans-serif' }}>software</span>
            </div>
            <p style={{ color: '#64748b', fontSize: 13 }}>Software hecho para resolver, no para impresionar.</p>
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
