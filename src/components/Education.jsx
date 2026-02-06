import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt, FaBook } from 'react-icons/fa'
import { education } from '../data/education'

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Formation Académique
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 last:pb-0 border-l-4 border-secondary-500 dark:border-secondary-400"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-secondary-500 dark:bg-secondary-400 border-4 border-white dark:border-gray-800" />

              <div className="bg-gradient-to-br from-secondary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ml-4 border border-secondary-200 dark:border-secondary-800">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-3xl text-secondary-500 dark:text-secondary-400">
                      <FaGraduationCap />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        {edu.institution}
                      </h4>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-secondary-500" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendar className="text-secondary-500" />
                      {edu.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {edu.description}
                </p>

                {/* Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                      <span className="text-secondary-500">✓</span>
                      Points Forts
                    </h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                          <span className="text-secondary-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Courses */}
                {edu.courses && edu.courses.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                      <FaBook className="text-secondary-500" />
                      Cours Principaux
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1.5 bg-white dark:bg-gray-700 text-secondary-700 dark:text-secondary-300 rounded-full text-xs font-medium border border-secondary-200 dark:border-secondary-700 hover:scale-105 transition-transform cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education