"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import StarBackground from "@/components/star-background"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    localStorage.setItem("darkMode", String(newDarkMode))
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <StarBackground />
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
