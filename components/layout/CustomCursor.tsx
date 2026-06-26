'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)

  useEffect(() => {
    // ponytail: skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const cursor = cursorRef.current!
    cursor.style.display = 'block'

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.15)
      current.current.y = lerp(current.current.y, pos.current.y, 0.15)
      cursor.style.transform = `translate(${current.current.x - 4}px, ${current.current.y - 4}px)`
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)

    const onEnter = () => {
      cursor.style.width = '32px'
      cursor.style.height = '32px'
    }
    const onLeave = () => {
      cursor.style.width = '8px'
      cursor.style.height = '8px'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      cancelAnimationFrame(raf.current)
      document.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      style={{
        display: 'none',
        width: 8,
        height: 8,
        background: 'var(--cr-accent)',
        top: 0,
        left: 0,
      }}
    />
  )
}
