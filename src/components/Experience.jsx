import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaCalendar, FaCheckCircle } from 'react-icons/fa'
import { experiences } from '../data/experiences'

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Expérience Professionnelle
        </motion.h2>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-4 border-primary-500 dark:border-primary-400"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-primary-500 dark:bg-primary-400 border-4 border-white dark:border-gray-900" />

              {/* Current badge */}
              {exp.current && (
                <div className="absolute -left-3 top-8 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                  Actuel
                </div>
              )}

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ml-4">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-primary-600 dark:text-primary-400">
                    {exp.position}
                  </h3>
                  <h4 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">
                    {exp.companyFull}
                  </h4>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-primary-500" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendar className="text-primary-500" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="mb-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                    <h5 className="font-semibold text-primary-700 dark:text-primary-300 mb-2 flex items-center gap-2">
                      <FaCheckCircle /> Points Clés
                    </h5>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Description */}
                <div className="mb-4">
                  <h5 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">
                    Responsabilités & Réalisations
                  </h5>
                  <ul className="space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-primary-500 mt-1.5 text-xs">▸</span>
                        <span className="text-sm">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">
                    Technologies Utilisées
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium hover:scale-110 transition-transform cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience