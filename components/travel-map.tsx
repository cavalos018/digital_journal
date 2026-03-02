"use client"

import { useState, memo } from "react"
import { motion } from "framer-motion"
import { Sparkles, MapPin } from "lucide-react"

// US State SVG paths - simplified for all 50 states + DC
const US_STATES: Record<string, { name: string; path: string }> = {
  AL: { name: "Alabama", path: "M628,466 L628,520 L618,542 L625,552 L620,556 L632,556 L652,556 L652,466Z" },
  AK: { name: "Alaska", path: "M161,485 L183,485 L183,510 L171,520 L161,515 L148,520 L138,510 L132,500 L120,497 L110,490 L100,485 L113,478 L130,478 L140,475 L155,478Z" },
  AZ: { name: "Arizona", path: "M205,442 L272,442 L285,530 L260,545 L228,548 L200,535 L195,500Z" },
  AR: { name: "Arkansas", path: "M560,460 L620,457 L623,465 L628,467 L628,510 L617,517 L560,520Z" },
  CA: { name: "California", path: "M120,290 L145,288 L168,340 L182,385 L195,440 L195,500 L175,485 L155,460 L130,430 L110,385 L105,340 L110,310Z" },
  CO: { name: "Colorado", path: "M300,340 L395,340 L395,410 L300,410Z" },
  CT: { name: "Connecticut", path: "M815,260 L838,252 L845,268 L835,278 L815,275Z" },
  DE: { name: "Delaware", path: "M790,330 L800,325 L805,340 L798,350 L790,345Z" },
  FL: { name: "Florida", path: "M652,555 L735,540 L752,555 L755,580 L740,610 L720,640 L700,655 L680,645 L665,620 L650,595 L645,575 L640,555Z" },
  GA: { name: "Georgia", path: "M652,466 L710,455 L725,475 L735,510 L735,540 L652,556Z" },
  HI: { name: "Hawaii", path: "M270,570 L285,565 L295,572 L290,582 L278,585 L268,580Z" },
  ID: { name: "Idaho", path: "M220,175 L265,175 L270,190 L255,260 L245,290 L215,290 L210,250 L215,210Z" },
  IL: { name: "Illinois", path: "M590,280 L620,278 L628,290 L635,340 L630,380 L615,408 L600,415 L585,395 L580,360 L585,310Z" },
  IN: { name: "Indiana", path: "M635,290 L665,285 L670,340 L665,395 L640,408 L630,380 L635,340Z" },
  IA: { name: "Iowa", path: "M510,280 L585,278 L590,280 L585,310 L580,340 L510,342 L498,315Z" },
  KS: { name: "Kansas", path: "M420,380 L530,378 L535,378 L540,430 L420,432Z" },
  KY: { name: "Kentucky", path: "M615,408 L720,385 L730,395 L720,410 L670,420 L635,425 L615,420Z" },
  LA: { name: "Louisiana", path: "M560,520 L617,517 L620,556 L625,575 L615,590 L595,588 L575,580 L555,570 L550,545Z" },
  ME: { name: "Maine", path: "M845,150 L860,140 L870,160 L865,195 L850,220 L835,210 L840,180Z" },
  MD: { name: "Maryland", path: "M745,330 L790,325 L790,345 L775,355 L755,348 L745,340Z" },
  MA: { name: "Massachusetts", path: "M825,245 L855,238 L862,248 L850,255 L825,258Z" },
  MI: { name: "Michigan", path: "M605,195 L620,185 L640,195 L660,210 L670,240 L665,270 L665,285 L635,290 L620,278 L610,255 L605,225Z" },
  MN: { name: "Minnesota", path: "M480,155 L545,155 L555,160 L555,270 L510,272 L498,260 L480,230Z" },
  MS: { name: "Mississippi", path: "M595,465 L620,458 L628,466 L628,520 L618,542 L625,552 L620,556 L595,558 L585,540 L590,500Z" },
  MO: { name: "Missouri", path: "M530,378 L540,378 L540,430 L560,460 L560,420 L580,408 L585,395 L580,360 L580,340 L530,342Z" },
  MT: { name: "Montana", path: "M255,155 L380,152 L385,230 L255,232Z" },
  NE: { name: "Nebraska", path: "M390,310 L500,308 L510,280 L498,315 L510,342 L395,342Z" },
  NV: { name: "Nevada", path: "M170,270 L220,268 L230,350 L210,410 L195,440 L168,340Z" },
  NH: { name: "New Hampshire", path: "M835,180 L845,175 L850,220 L835,230 L830,210 L832,190Z" },
  NJ: { name: "New Jersey", path: "M795,285 L808,280 L812,310 L805,340 L795,340 L790,320Z" },
  NM: { name: "New Mexico", path: "M272,442 L300,442 L300,540 L260,545 L285,530Z" },
  NY: { name: "New York", path: "M755,200 L810,195 L825,210 L830,240 L815,260 L795,265 L790,285 L770,280 L755,260Z" },
  NC: { name: "North Carolina", path: "M665,420 L720,410 L770,400 L790,418 L770,435 L725,450 L710,455 L665,460Z" },
  ND: { name: "North Dakota", path: "M390,155 L480,155 L480,230 L390,232Z" },
  OH: { name: "Ohio", path: "M670,290 L720,280 L730,310 L725,360 L720,385 L670,395 L665,340Z" },
  OK: { name: "Oklahoma", path: "M395,415 L420,415 L420,432 L540,430 L560,460 L560,465 L460,468 L395,470Z" },
  OR: { name: "Oregon", path: "M115,175 L220,175 L215,210 L210,250 L145,252 L120,235 L110,210Z" },
  PA: { name: "Pennsylvania", path: "M720,275 L790,268 L795,285 L790,320 L745,330 L720,325Z" },
  RI: { name: "Rhode Island", path: "M842,258 L850,255 L852,265 L845,270 L840,266Z" },
  SC: { name: "South Carolina", path: "M710,455 L725,450 L745,455 L740,475 L725,475Z" },
  SD: { name: "South Dakota", path: "M390,232 L480,230 L498,260 L500,308 L390,310Z" },
  TN: { name: "Tennessee", path: "M615,420 L665,420 L720,410 L730,395 L720,420 L665,430 L615,435Z" },
  TX: { name: "Texas", path: "M350,470 L460,468 L560,465 L560,520 L555,570 L540,590 L510,615 L475,640 L440,650 L410,635 L380,605 L355,570 L340,530 L345,495Z" },
  UT: { name: "Utah", path: "M245,290 L300,290 L300,410 L270,410 L230,350Z" },
  VT: { name: "Vermont", path: "M820,180 L832,178 L835,210 L830,235 L818,225Z" },
  VA: { name: "Virginia", path: "M720,370 L780,360 L800,378 L790,395 L770,400 L720,410Z" },
  WA: { name: "Washington", path: "M130,115 L220,115 L225,175 L115,175 L110,155 L120,135Z" },
  WV: { name: "West Virginia", path: "M720,325 L745,330 L745,360 L730,380 L720,385 L725,360 L730,340 L725,325Z" },
  WI: { name: "Wisconsin", path: "M545,170 L580,168 L600,180 L605,225 L590,268 L555,270 L545,230Z" },
  WY: { name: "Wyoming", path: "M270,235 L380,232 L385,310 L275,312Z" },
}

// Sample visited states - easy to edit
const INITIAL_VISITED = new Set(["TX", "CA", "NY", "CO", "FL", "AZ", "NM", "UT", "WA", "OR", "GA", "TN", "NC"])

function TravelMap() {
  const [visitedStates, setVisitedStates] = useState<Set<string>>(INITIAL_VISITED)
  const [hoveredState, setHoveredState] = useState<string | null>(null)

  const toggleState = (stateId: string) => {
    setVisitedStates((prev) => {
      const next = new Set(prev)
      if (next.has(stateId)) {
        next.delete(stateId)
      } else {
        next.add(stateId)
      }
      return next
    })
  }

  return (
    <section id="travel" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Adventures</span>
            <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-balance font-serif cursive-safe">
            Where I{"'"}ve{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Been
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            Click on states to mark them as visited. My goal is to explore all 50!
          </p>
        </motion.div>

        <motion.div
          className="bg-card rounded-2xl border border-border p-6 md:p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Counter */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
            <p className="text-lg font-medium">
              <span className="text-3xl text-primary font-serif">{visitedStates.size}</span>
              <span className="text-muted-foreground"> of 50 states visited</span>
            </p>
          </div>

          {/* SVG Map */}
          <div className="relative w-full max-w-4xl mx-auto">
            <svg
              viewBox="80 100 810 580"
              className="w-full h-auto"
              role="img"
              aria-label="Interactive map of the United States showing visited states"
            >
              {Object.entries(US_STATES).map(([id, state]) => {
                const isVisited = visitedStates.has(id)
                const isHovered = hoveredState === id
                return (
                  <g key={id}>
                    <path
                      d={state.path}
                      className={`cursor-pointer transition-all duration-200 ${
                        isVisited
                          ? "fill-primary stroke-primary-foreground"
                          : "fill-muted stroke-border"
                      } ${isHovered ? "opacity-80" : ""}`}
                      strokeWidth={1.5}
                      onClick={() => toggleState(id)}
                      onMouseEnter={() => setHoveredState(id)}
                      onMouseLeave={() => setHoveredState(null)}
                    />
                    {/* State label for larger states */}
                  </g>
                )
              })}
            </svg>

            {/* Tooltip */}
            {hoveredState && (
              <div className="absolute top-4 right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg pointer-events-none">
                <p className="font-bold text-foreground text-sm">{US_STATES[hoveredState].name}</p>
                <p className="text-xs text-muted-foreground">
                  {visitedStates.has(hoveredState) ? "Visited" : "Not yet visited"}
                </p>
              </div>
            )}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary" />
              <span className="text-sm text-muted-foreground">Visited</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-muted border border-border" />
              <span className="text-sm text-muted-foreground">Not yet</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(TravelMap)
