"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = () => {
    setIsTransitioning(true)

    // Add ripple effect from button
    const button = document.getElementById("theme-toggle-button")
    if (button) {
      const rect = button.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2

      // Create ripple overlay
      const ripple = document.createElement("div")
      ripple.className = "theme-ripple"
      ripple.style.left = `${x}px`
      ripple.style.top = `${y}px`
      document.body.appendChild(ripple)

      // Trigger animation
      requestAnimationFrame(() => {
        ripple.classList.add("active")
      })

      // Change theme after brief delay for visual effect
      setTimeout(() => {
        setTheme(theme === "light" ? "dark" : "light")
      }, 300)

      // Remove ripple after animation
      setTimeout(() => {
        ripple.remove()
        setIsTransitioning(false)
      }, 800)
    } else {
      setTheme(theme === "light" ? "dark" : "light")
      setIsTransitioning(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        id="theme-toggle-button"
        variant="ghost"
        size="sm"
        onClick={handleThemeChange}
        disabled={isTransitioning}
        className="relative backdrop-blur-md bg-white/20 dark:bg-gray-800/30 border border-white/30 dark:border-gray-600/30 hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-300 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {theme === "light" ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-4 w-4 text-yellow-500" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="h-4 w-4 text-blue-400" />
            </motion.div>
          )}
        </AnimatePresence>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </motion.div>
  )
}
