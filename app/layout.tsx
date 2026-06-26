import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/layout/CustomCursor'
import ScrollProgress from '@/components/layout/ScrollProgress'

const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne', display: 'swap' })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter', display: 'swap' })

export const metadata: Metadata = {
  title: 'CReality Software — Desarrollo e infraestructura cloud',
  description: 'Construimos aplicaciones web, mobile y desktop, y automatizamos infraestructura cloud. Bogotá, Colombia.',
  openGraph: {
    title: 'CReality Software',
    description: 'Software que resuelve problemas reales de negocio.',
    locale: 'es_CO',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
