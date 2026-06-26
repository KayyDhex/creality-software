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
          >
            <img src="/logos/Logo blanco.svg" alt="CReality Software" height={44} style={{ height: 44, width: 'auto' }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
