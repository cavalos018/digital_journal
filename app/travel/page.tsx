import type { Metadata } from "next"
import SiteShell from "@/components/site-shell"
import USTravelMap from "@/components/us-travel-map"
import WorldTravelMap from "@/components/world-travel-map"

export const metadata: Metadata = {
  title: "Travel | Claud's Digital Journal",
  description: "Travel highlights across the U.S. and the world.",
}

export default function TravelPage() {
  return (
    <SiteShell>
      <USTravelMap />
      <WorldTravelMap />
    </SiteShell>
  )
}
