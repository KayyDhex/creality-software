'use client'
import { useRef } from 'react'

const techs = [
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
]

const Item = ({ t }: { t: typeof techs[0] }) => (
  <div className="flex flex-col items-center gap-2 px-8 group cursor-default">
    {/* ponytail: grayscale via CSS filter, color on hover */}
    <img
      src={t.icon}
      alt={t.name}
      width={36}
      height={36}
      style={{ filter: 'grayscale(1) opacity(0.4)', transition: 'filter 0.25s ease' }}
      onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0) opacity(1)')}
      onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(1) opacity(0.4)')}
    />
    <span className="text-xs" style={{ color: '#94a3b8' }}>{t.name}</span>
  </div>
)

export default function TechMarquee() {
  const doubled = [...techs, ...techs]

  return (
    <section className="py-10 overflow-hidden" style={{ background: 'var(--cr-gray)', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .marquee-track { animation: marquee 28s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `}</style>
      <div className="flex">
        <div className="marquee-track flex items-center">
          {doubled.map((t, i) => <Item key={i} t={t} />)}
        </div>
      </div>
    </section>
  )
}
