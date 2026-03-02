"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  opacity: number
  rotation: number
}

export default function StarBackground() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generated: Star[] = []
    const count = 40
    for (let i = 0; i < count; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 14 + 8,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2,
        opacity: Math.random() * 0.25 + 0.08,
        rotation: Math.random() * 30 - 15,
      })
    }
    setStars(generated)
  }, [])

  if (stars.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            rotate: `${star.rotation}deg`,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width={star.size}
            height={star.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L14.09 8.26L20.18 8.63L15.54 12.74L17.09 18.77L12 15.27L6.91 18.77L8.46 12.74L3.82 8.63L9.91 8.26L12 2Z"
              className="fill-primary/40"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
