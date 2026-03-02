"use client"

import { memo, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Sparkles } from "lucide-react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const GEO_URL = "/geo/countries-110m.json"

// Hardcoded visited countries
// Note: names must match the TopoJSON properties (geo.properties.name).
// Example: the dataset uses "Dominican Rep." (not "Dominican Republic").
// Hover over the country in the website then match that name down below.
const VISITED_COUNTRIES = new Set<string>(["Mexico", "Dominican Rep.", "United States of America"])

function WorldTravelMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)

  const visitedCount = VISITED_COUNTRIES.size

  const visitedLabel = useMemo(() => {
    if (!hoveredCountry) return null
    return {
      name: hoveredCountry,
      visited: VISITED_COUNTRIES.has(hoveredCountry),
    }
  }, [hoveredCountry])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
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
            Countries {" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Traveled To</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">Visited countries are highlighted.</p>
        </motion.div>

        <motion.div
          className="bg-card rounded-2xl border border-border p-6 md:p-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
            <p className="text-lg font-medium">
              <span className="text-3xl text-primary font-serif">{visitedCount}</span>
              <span className="text-muted-foreground"> countries visited</span>
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            <ComposableMap
              projection="geoEqualEarth"
              // Reduce scale so the full world fits in the default 800x450 viewBox (prevents edge clipping)
              projectionConfig={{ scale: 150 }}
              className="w-full h-auto"
              aria-label="World map showing visited countries"
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies
                    .filter((geo) => geo.properties?.name !== "Antarctica")
                    .map((geo) => {
                      const name = String(geo.properties?.name ?? "")
                      const isVisited = VISITED_COUNTRIES.has(name)
                      const isHovered = hoveredCountry === name

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          onMouseEnter={() => setHoveredCountry(name)}
                          onMouseLeave={() => setHoveredCountry(null)}
                          style={{
                            default: {
                              fill: isVisited ? "#ef4444" : "#ffffff",
                              stroke: "#111827",
                              strokeWidth: 0.6,
                              outline: "none",
                              opacity: 1,
                            },
                            hover: {
                              fill: isVisited ? "#dc2626" : "#ffffff",
                              stroke: "#111827",
                              strokeWidth: 0.8,
                              outline: "none",
                              opacity: isHovered ? 0.9 : 1,
                            },
                            pressed: {
                              fill: isVisited ? "#b91c1c" : "#ffffff",
                              stroke: "#111827",
                              strokeWidth: 0.8,
                              outline: "none",
                            },
                          }}
                        />
                      )
                    })
                }
              </Geographies>
            </ComposableMap>

            {visitedLabel && (
              <div className="absolute top-4 right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg pointer-events-none">
                <p className="font-bold text-foreground text-sm">{visitedLabel.name}</p>
                <p className="text-xs text-muted-foreground">{visitedLabel.visited ? "Visited" : "Not yet visited"}</p>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: "#ef4444" }} />
              <span className="text-sm text-muted-foreground">Visited</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded border" style={{ backgroundColor: "#ffffff", borderColor: "#111827" }} />
              <span className="text-sm text-muted-foreground">Not yet</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(WorldTravelMap)
