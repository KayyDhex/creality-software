'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const raf = useRef<number>(0)
  const hovered = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current!
    const ringEl = ringRef.current!
    dot.style.display = 'block'
    ringEl.style.display = 'block'

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12)

      dot.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`
      ringEl.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`

      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    const onEnter = () => {
      hovered.current = true
      ringEl.style.width = '48px'
      ringEl.style.height = '48px'
      ringEl.style.opacity = '0.7'
      ringEl.style.marginLeft = '-8px'
      ringEl.style.marginTop = '-8px'
      dot.style.opacity = '0'
    }
    const onLeave = () => {
      hovered.current = false
      ringEl.style.width = '32px'
      ringEl.style.height = '32px'
      ringEl.style.opacity = '0.4'
      ringEl.style.marginLeft = '0'
      ringEl.style.marginTop = '0'
      dot.style.opacity = '1'
    }

    document.addEventListener('mousemove', onMove)
    const els = document.querySelectorAll('a, button')
    els.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })

    return () => {
      cancelAnimationFrame(raf.current)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        display: 'none', position: 'fixed', top: 0, left: 0, zIndex: 9999,
        width: 8, height: 8, borderRadius: '50%', background: 'var(--cr-accent)',
        pointerEvents: 'none', transition: 'opacity 0.1s',
      }} />
      <div ref={ringRef} style={{
        display: 'none', position: 'fixed', top: 0, left: 0, zIndex: 9998,
        width: 32, height: 32, borderRadius: '50%',
        border: '1px solid var(--cr-accent)', opacity: 0.4,
        pointerEvents: 'none', transition: 'width 0.2s, height 0.2s, opacity 0.2s, margin 0.2s',
      }} />
    </>
  )
}
