import type { Metadata } from "next"
import SiteShell from "@/components/site-shell"
import AboutMe from "@/components/about-me"
import WorkProcess from "@/components/work-process"
import Experience from "@/components/experience"

export const metadata: Metadata = {
  title: "About Me | Claud's Digital Journal",
  description: "Ways to get in touch.",
}

export default function AboutMePage() {
  return (
    <SiteShell>
      <AboutMe />
      <Experience />
    </SiteShell>
  )
}
