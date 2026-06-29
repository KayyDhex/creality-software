'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

const SERVICES = [
  'Desarrollo web',
  'App móvil',
  'Infraestructura cloud',
  'CI/CD y automatización',
  'Migración cloud',
  'Otro',
]

const COUNTRIES = [
  'Colombia', 'México', 'Argentina', 'Chile', 'Perú', 'Ecuador',
  'Venezuela', 'España', 'Estados Unidos', 'Otro',
]

type FormState = {
  full_name: string
  email: string
  company: string
  phone: string
  country: string
  services: string[]
  message: string
}

const empty: FormState = {
  full_name: '', email: '', company: '', phone: '',
  country: '', services: [], message: '',
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(empty)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  const set = (k: keyof FormState, v: string) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(e => ({ ...e, [k]: '' }))
  }

  const toggleService = (s: string) => {
    setForm(f => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter(x => x !== s)
        : [...f.services, s],
    }))
    setErrors(e => ({ ...e, services: '' }))
  }

  const validate = () => {
    const e: typeof errors = {}
    if (!form.full_name.trim()) e.full_name = 'Requerido'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Email inválido'
    if (!form.company.trim()) e.company = 'Requerido'
    if (!form.services.length) e.services = 'Selecciona al menos uno'
    if (form.message.trim().length < 20) e.message = 'Cuéntanos un poco más (mín. 20 caracteres)'
    return e
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="contacto" className="py-28" style={{ background: 'var(--cr-gray)' }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center gap-6"
          >
            <CheckCircle size={56} style={{ color: 'var(--cr-cta)' }} />
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 32, color: 'var(--cr-dark)' }}>
              ¡Mensaje recibido!
            </h2>
            <p style={{ color: '#64748b', fontSize: 15 }}>
              Te contactaremos en menos de 24 horas.<br/>¡Gracias por confiar en nosotros!
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="py-24" style={{ background: 'var(--cr-gray)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-16 items-start">

          {/* Left: copy */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--cr-cta)' }}>Hablemos</p>
            <h2 className="mb-5" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--cr-dark)', lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mb-10" style={{ color: '#475569', fontSize: 15, lineHeight: 1.7 }}>
              Cuéntanos qué estás tratando de resolver. Sin compromiso — la primera llamada es para entender tu negocio, no para venderte nada.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { title: 'Respuesta en menos de 24h', desc: 'Te contactamos el siguiente día hábil.' },
                { title: 'Llamada de diagnóstico gratis', desc: '30 minutos para entender el problema.' },
                { title: 'Propuesta en 48h', desc: 'Alcance, cronograma e inversión sin letra pequeña.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: 'var(--cr-cta)' }} />
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--cr-dark)' }}>{item.title}</p>
                    <p className="text-sm" style={{ color: '#94a3b8' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={submit}
            noValidate
            className="md:col-span-3 rounded-2xl p-8 flex flex-col gap-5 bg-white"
            style={{ boxShadow: '0 4px 32px rgba(0,29,74,0.08)', border: '1px solid rgba(0,29,74,0.06)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nombre completo *" error={errors.full_name}>
                <input
                  type="text" value={form.full_name} onChange={e => set('full_name', e.target.value)}
                  placeholder="Ana García"
                  className={inputCls(!!errors.full_name)}
                />
              </Field>
              <Field label="Email *" error={errors.email}>
                <input
                  type="email" value={form.email} onChange={e => set('email', e.target.value)}
                  placeholder="ana@empresa.com"
                  className={inputCls(!!errors.email)}
                />
              </Field>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Empresa *" error={errors.company}>
                <input
                  type="text" value={form.company} onChange={e => set('company', e.target.value)}
                  placeholder="Acme S.A.S."
                  className={inputCls(!!errors.company)}
                />
              </Field>
              <Field label="Teléfono / WhatsApp">
                <input
                  type="tel" value={form.phone} onChange={e => set('phone', e.target.value)}
                  placeholder="+57 300 000 0000"
                  className={inputCls(false)}
                />
              </Field>
            </div>

            {/* Country */}
            <Field label="País">
              <select value={form.country} onChange={e => set('country', e.target.value)} className={inputCls(false)}>
                <option value="">Selecciona tu país</option>
                {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </Field>

            {/* Services */}
            <Field label="¿En qué podemos ayudarte? *" error={errors.services}>
              <div className="flex flex-wrap gap-2 pt-1">
                {SERVICES.map(s => (
                  <button
                    key={s} type="button" onClick={() => toggleService(s)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                    style={form.services.includes(s)
                      ? { background: 'var(--cr-cta)', color: '#001d4a', border: '1px solid var(--cr-cta)' }
                      : { background: 'transparent', color: '#475569', border: '1px solid #cbd5e1' }
                    }
                  >
                    {s}
                  </button>
                ))}
              </div>
            </Field>

            {/* Message */}
            <Field label="Cuéntanos más *" error={errors.message}>
              <textarea
                rows={4} value={form.message} onChange={e => set('message', e.target.value)}
                placeholder="Describe brevemente el problema que quieres resolver o el proyecto que tienes en mente..."
                className={inputCls(!!errors.message)}
                style={{ resize: 'vertical' }}
              />
            </Field>

            {status === 'error' && (
              <div className="flex items-center gap-2 text-sm" style={{ color: '#f87171' }}>
                <AlertCircle size={15} /> Algo salió mal. Escríbenos a contacto@creality.co
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-shimmer self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm font-semibold transition-opacity"
              style={{ background: 'var(--grad-cta)', color: '#001d4a', opacity: status === 'loading' ? 0.7 : 1 }}
            >
              {status === 'loading' ? 'Enviando…' : <>Enviar mensaje <ArrowRight size={15} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

const inputCls = (hasError: boolean) =>
  `w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-all duration-200 ${hasError ? 'border-red-400' : 'border-white/10 focus:border-[#ECA400]/60'}`

const inputStyle = {
  background: 'rgba(255,255,255,0.06)',
  color: 'rgba(255,255,255,0.85)',
  border: '1px solid rgba(255,255,255,0.1)',
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold" style={{ color: '#475569' }}>{label}</label>
      {/* inject inline style into input/select/textarea via wrapper */}
      <div className="[&_input]:bg-slate-50 [&_input]:text-slate-800 [&_input]:border [&_input]:border-slate-200 [&_input:focus]:border-[#ECA400] [&_select]:bg-slate-50 [&_select]:text-slate-800 [&_select]:border [&_select]:border-slate-200 [&_select]:appearance-none [&_select:focus]:border-[#ECA400] [&_textarea]:bg-slate-50 [&_textarea]:text-slate-800 [&_textarea]:border [&_textarea]:border-slate-200 [&_textarea:focus]:border-[#ECA400]">
        {children}
      </div>
      {error && <p className="text-xs" style={{ color: '#f87171' }}>{error}</p>}
    </div>
  )
}
