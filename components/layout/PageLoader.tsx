'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'var(--cr-dark)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0.8] }}
            transition={{ duration: 0.7, times: [0, 0.4, 0.7, 1] }}
            className="flex items-baseline gap-0.5"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: 32, color: 'var(--cr-white)' }}
          >
            <span style={{ color: 'var(--cr-accent)' }}>C</span>Reality
            <span style={{ color: '#64748b', fontSize: 14, marginLeft: 4 }}>software</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
