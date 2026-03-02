import type { Metadata } from "next"
import SayHi from "@/components/say-hi"
import SiteShell from "@/components/site-shell"

export const metadata: Metadata = {
  title: "Say Hi | Claud's Digital Journal",
  description: "Ways to get in touch.",
}

export default function SayHiPage() {
  return (
    <SiteShell>
      <SayHi />
    </SiteShell>
  )
}
