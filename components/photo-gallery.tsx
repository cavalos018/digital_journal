"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const photos = [
  { src: "/images/Kayaking.jpg", alt: "Kayaking | July 2025", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/catan.jpg", alt: "Catan Night | September 2025", span: "" },
  { src: "/images/Roots.jpg", alt: "Roots | September 2025", span: "" },
  { src: "/images/Cancun.jpg", alt: "Cancun | August 2025", span: "" },
  { src: "/images/Flying1.jpg", alt: "Over Illinois | September 2024", span: "" },
  { src: "/images/axe_throwing.jpg", alt: "Axe Throwing | October 2025", span: "" },
  { src: "/images/Shoveling.jpg", alt: "Shoveling | November 2025", span: "" },
  { src: "/images/flying2.jpg", alt: "Over Illinois | September 2024", span: "md:col-span-2" },
  { src: "/images/Galena.jpg", alt: "Galena | February 2026", span: "" },
  { src: "/images/Galena_Waterfall.jpeg", alt: "Galena Waterfall | February 2026", span: "" },
  { src: "/images/Ohio_Sunset.jpg", alt: "Ohio Sunset | July 2025", span: "md:col-span-2 md:row-span-2" },
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  return (
    <section id="photos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/50">
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
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Moments Captured</span>
            <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-balance font-serif cursive-safe">
            Photo{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Scrapbook
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-4">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${photo.span}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ rotate: idx % 2 === 0 ? 1 : -1, scale: 1.02 }}
              onClick={() => setSelectedPhoto(idx)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-white">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedPhoto !== null && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[85vh] w-full aspect-[4/3] rounded-2xl overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Image
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].alt}
              fill
              className="object-contain"
            />
          </motion.div>
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-lg font-medium bg-black/40 rounded-full w-10 h-10 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Close lightbox"
          >
            X
          </button>
        </motion.div>
      )}
    </section>
  )
}
