"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Business Analyst",
      company: "Premier Service",
      period: "03/2025 – Present",
      location: "Oak Brook, IL",
      highlights: [
        "Develop internal tools using HTML, CSS, and Next.js, hosted via GitHub.",
        "Created a web-based hiring application system that digitized the paper job application process, improving HR workflow efficiency, and enabling structured applicant data collection.",
        "Support operations leadership with ad hoc analysis and metric tracking to inform day-to-day and seasonal decision making.",
        "Design and maintain data pipelines by pulling data from external APIs and web scraping sources to centralize operational and fleet datasets for analysis.",
      ],
    },
    {
      title: "Medical Research Data Entry Specialist",
      company: "AMR Baber Research",
      period: "05/2024 – 08/2024",
      location: "Naperville, IL",
      highlights: [
        "Diligently entered data with meticulous attention to detail to ensure data integrity.",
        "Identified and resolved data related queries promptly to minimize delays.",
        "Recruited trial subjects, collected, and analyzed data using both internal databases and referrals in accordance with study protocol.",
      ],
    },
    {
      title: "Insurance Coordinator",
      company: "Dental Smiles",
      period: "05/2023 – 08/2023",
      location: "Bolingbrook, IL",
      highlights: [
        "Used strong data entry skills to process over 50 patient records daily while performing seamless entry of private information.",
        "Answered and directed a daily volume of 30 or more patient phone calls and messages.",
        "Strategically scheduled patients to optimize efficiency for both the office and patient preferences.",
      ],
    },
    {
      title: "Office Administrator",
      company: "Casey Products",
      period: "05/2022 – 08/2022",
      location: "Woodridge, IL",
      highlights: [
        "Performed meticulous review of data and its integration into the electronic data interchange (EDI) system daily for over 25 quotes and invoices to maintain data integrity.",
        "Thoroughly reviewed colleagues’ work to identify errors and discrepancies.",
        "Performed general office upkeep including organization, supply tracking and ordering, and filing.",
      ],
    },

    {
      title: "Administrative Assistant",
      company: "Aurora Bright Dental",
      period: "05/2021 – 08/2021",
      location: "Aurora, IL",
      highlights: [
        "Verified insurance benefits of over 10 distinct insurance providers using internal databases.",
        "Consistently and efficiently scheduled an average of 20 new patients on a monthly basis.",
        "Independently oversaw administrative duties in the manager’s absence, including end of day reports.",
      ],
    }
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
