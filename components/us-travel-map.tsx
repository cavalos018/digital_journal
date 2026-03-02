"use client"

import { memo, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Sparkles } from "lucide-react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"

const GEO_URL = "/geo/us-states-10m.json"

// Hardcoded visited states (FIPS codes)
const VISITED_STATE_IDS = new Set<string>(["06", "12", "17", "19", "39"]) // CA, FL, IL, IA, OH

const STATE_NAMES: Record<string, string> = {
  "01": "Alabama",
  "02": "Alaska",
  "04": "Arizona",
  "05": "Arkansas",
  "06": "California",
  "08": "Colorado",
  "09": "Connecticut",
  "10": "Delaware",
  "11": "District of Columbia",
  "12": "Florida",
  "13": "Georgia",
  "15": "Hawaii",
  "16": "Idaho",
  "17": "Illinois",
  "18": "Indiana",
  "19": "Iowa",
  "20": "Kansas",
  "21": "Kentucky",
  "22": "Louisiana",
  "23": "Maine",
  "24": "Maryland",
  "25": "Massachusetts",
  "26": "Michigan",
  "27": "Minnesota",
  "28": "Mississippi",
  "29": "Missouri",
  "30": "Montana",
  "31": "Nebraska",
  "32": "Nevada",
  "33": "New Hampshire",
  "34": "New Jersey",
  "35": "New Mexico",
  "36": "New York",
  "37": "North Carolina",
  "38": "North Dakota",
  "39": "Ohio",
  "40": "Oklahoma",
  "41": "Oregon",
  "42": "Pennsylvania",
  "44": "Rhode Island",
  "45": "South Carolina",
  "46": "South Dakota",
  "47": "Tennessee",
  "48": "Texas",
  "49": "Utah",
  "50": "Vermont",
  "51": "Virginia",
  "53": "Washington",
  "54": "West Virginia",
  "55": "Wisconsin",
  "56": "Wyoming",
  "60": "American Samoa",
  "66": "Guam",
  "69": "Northern Mariana Islands",
  "72": "Puerto Rico",
  "74": "U.S. Minor Outlying Islands",
  "78": "U.S. Virgin Islands",
}

function USTravelMap() {
  const [hoveredStateId, setHoveredStateId] = useState<string | null>(null)

  const hovered = useMemo(() => {
    if (!hoveredStateId) return null
    return {
      id: hoveredStateId,
      name: STATE_NAMES[hoveredStateId] ?? hoveredStateId,
      visited: VISITED_STATE_IDS.has(hoveredStateId),
    }
  }, [hoveredStateId])

  const visitedCount = VISITED_STATE_IDS.size

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
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Where I've Been</span>
            <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-balance font-serif cursive-safe">
            States {" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Visited</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">Visited states are highlighted.</p>
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
              <span className="text-muted-foreground"> states visited</span>
            </p>
          </div>

          <div className="relative w-full max-w-5xl mx-auto">
            <ComposableMap
              projection="geoAlbersUsa"
              className="w-full h-auto"
              aria-label="Map of the United States showing visited states"
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const id = String(geo.id ?? "")
                    const isVisited = VISITED_STATE_IDS.has(id)
                    const isHovered = hoveredStateId === id

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => setHoveredStateId(id)}
                        onMouseLeave={() => setHoveredStateId(null)}
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
                            strokeWidth: 0.9,
                            outline: "none",
                            opacity: isHovered ? 0.9 : 1,
                          },
                          pressed: {
                            fill: isVisited ? "#b91c1c" : "#ffffff",
                            stroke: "#111827",
                            strokeWidth: 0.9,
                            outline: "none",
                          },
                        }}
                      />
                    )
                  })
                }
              </Geographies>
            </ComposableMap>

            {hovered && (
              <div className="absolute top-4 right-4 bg-card border border-border rounded-xl px-4 py-2 shadow-lg pointer-events-none">
                <p className="font-bold text-foreground text-sm">{hovered.name}</p>
                <p className="text-xs text-muted-foreground">{hovered.visited ? "Visited" : "Not yet visited"}</p>
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

export default memo(USTravelMap)
