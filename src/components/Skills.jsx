import { motion } from 'framer-motion'
import { FaAward } from 'react-icons/fa'
import { skills } from '../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Compétences Techniques
        </motion.h2>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skills.categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400 flex items-center gap-2">
                <span className="text-2xl">{category.skills[0]?.icon || '⚡'}</span>
                {category.name}
              </h3>

              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="flex items-center gap-2 font-medium text-gray-700 dark:text-gray-300">
                        <span className="text-lg">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.1 * skillIndex }}
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ML Algorithms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Algorithmes Machine Learning & Deep Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.mlAlgorithms.map((algo, index) => (
              <motion.span
                key={algo}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium hover:scale-110 transition-transform cursor-default shadow-sm"
              >
                {algo}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200 flex items-center justify-center gap-2">
            <FaAward className="text-yellow-500" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skills.certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center border-2 border-yellow-200 dark:border-yellow-800"
              >
                <div className="text-5xl mb-4">
                  🏆
                </div>
                <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-gray-200">
                  {cert.name}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
            Stack Technique Complet
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-6xl mx-auto">
            {skills.allSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 hover:scale-110 transition-all cursor-default shadow-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills