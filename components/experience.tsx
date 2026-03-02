"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Sr. Software Engineer",
      company: "Globant India Pvt Ltd",
      period: "11/2020 – Present",
      location: "Pune",
      highlights: [
        "Leading UI/frontend team of 5 to develop interactive user interfaces",
        "Delivered pixel-perfect UIs by converting PSD/Figma/InDesign designs",
        "Revamped legacy products for performance and web standards compliance",
        "Enhanced accessibility features to meet WCAG 2.2 AA guidelines",
      ],
    },
    {
      title: "Sr. Web Designer",
      company: "Markets and Markets Research Pvt. Ltd",
      period: "05/2019 – 11/2020",
      location: "Pune",
      highlights: [
        "Created responsive web pages integrating PSD designs to HTML and Angular 7",
        "Designed UIs for dynamic email templates",
        "Restyled UI components for improved appeal and usability",
        "Managed version control with Git",
      ],
    },
    {
      title: "Web Designer",
      company: "Yardi Software India Pvt. Ltd",
      period: "10/2017 – 05/2019",
      location: "Pune",
      highlights: [
        "Executed design process for dynamic/static email templates",
        "Integrated PSD to HTML/.NET framework",
        "Redesigned products for modern standards and ADA compliance",
        "Managed frontend UI for Angular 2",
      ],
    },
    {
      title: "Web Designer",
      company: "Circl Design India Pvt. Ltd",
      period: "04/2017 – 09/2017",
      location: "Pune",
      highlights: [
        "Developed website projects using HTML, CSS, WordPress",
        "Created responsive layouts with Bootstrap",
        "Implemented dynamic functions with JavaScript/jQuery",
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Professional{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 hover:border-primary transition-colors"
                whileHover={{ paddingLeft: 32 }}
              >
                <motion.div
                  className="absolute -left-3 top-0 w-4 h-4 bg-primary rounded-full"
                  aria-hidden="true"
                  whileHover={{ scale: 1.3 }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time>{exp.period}</time>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      className="text-sm text-muted-foreground flex gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <span className="text-primary mt-1 flex-shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
