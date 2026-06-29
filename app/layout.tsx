import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/layout/CustomCursor'
import ScrollProgress from '@/components/layout/ScrollProgress'

const syne = Syne({ subsets: ['latin'], weight: ['700', '800'], variable: '--font-syne', display: 'swap' })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-inter', display: 'swap' })

const BASE_URL = 'https://www.crealitysoft.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'CReality Software — Desarrollo de software e infraestructura cloud en Colombia',
    template: '%s — CReality Software',
  },
  description: 'Empresa de desarrollo de software y cloud en Bogotá, Colombia. Construimos aplicaciones web, móviles y automatizamos infraestructura en AWS, GCP y Azure para empresas que necesitan soluciones reales.',
  keywords: [
    'desarrollo de software Colombia',
    'empresa de software Bogotá',
    'infraestructura cloud Colombia',
    'aplicaciones móviles iOS Colombia',
    'desarrollo web Bogotá',
    'AWS Colombia',
    'crealitysoft',
    'CReality Software',
  ],
  authors: [{ name: 'CReality Software', url: BASE_URL }],
  creator: 'CReality Software',
  publisher: 'CReality Software',
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: BASE_URL,
    siteName: 'CReality Software',
    title: 'CReality Software — Desarrollo de software e infraestructura cloud en Colombia',
    description: 'Construimos aplicaciones web, móviles y automatizamos infraestructura cloud para empresas en Colombia. Dev + Cloud bajo un mismo techo.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CReality Software' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CReality Software — Dev + Cloud en Colombia',
    description: 'Construimos aplicaciones y automatizamos infraestructura para empresas que ya no quieren depender de soluciones genéricas.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CReality Software',
  url: 'https://www.crealitysoft.com',
  logo: 'https://www.crealitysoft.com/logos/Logo%20corto%20default.png',
  description: 'Empresa de desarrollo de software e infraestructura cloud en Bogotá, Colombia.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bogotá',
    addressCountry: 'CO',
  },
  sameAs: [
    'https://www.instagram.com/creality.sof/',
    'https://www.linkedin.com/company/creality-software/',
  ],
  knowsAbout: [
    'Desarrollo de software',
    'Infraestructura cloud',
    'AWS',
    'Google Cloud Platform',
    'Aplicaciones móviles iOS',
    'Desarrollo web',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${syne.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CustomCursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
