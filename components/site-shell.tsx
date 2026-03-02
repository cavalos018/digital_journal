import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import StarBackground from "@/components/star-background"

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <StarBackground />
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  )
}
