"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeTransition() {
  const { theme } = useTheme()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prevTheme, setPrevTheme] = useState(theme)

  useEffect(() => {
    if (theme !== prevTheme && prevTheme !== undefined) {
      setIsTransitioning(true)
      const timer = setTimeout(() => {
        setIsTransitioning(false)
        setPrevTheme(theme)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [theme, prevTheme])

  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          {/* Full page overlay with fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] pointer-events-none bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10"
          />

          {/* Particles effect */}
          <div className="fixed inset-0 z-[99] pointer-events-none overflow-hidden">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  delay: Math.random() * 0.3,
                  ease: "easeOut",
                }}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"
                style={{
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>

          {/* Wave transition effect */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 h-1 z-[101] bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 origin-left"
          />
        </>
      )}
    </AnimatePresence>
  )
}
