import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCalendar, FaStar } from 'react-icons/fa'
import { projects, projectCategories } from '../data/projects'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = selectedCategory === 'Tous'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Projets
        </motion.h2>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-400 via-secondary-400 to-primary-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-50 group-hover:opacity-70 transition-opacity">
                      {project.category === 'AI/ML' ? '🤖' :
                        project.category === 'Big Data' ? '📊' :
                          project.category === 'Web Development' ? '🌐' : '⚙️'}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <FaStar /> Featured
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-full text-xs font-medium">
                    {project.type}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-md text-xs font-medium">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Date & Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <span className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <FaCalendar /> {project.date}
                    </span>
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          aria-label="GitHub"
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          aria-label="Demo"
                        >
                          <FaExternalLinkAlt size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {selectedProject.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 items-center">
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                          {selectedProject.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {selectedProject.date}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-2xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="prose dark:prose-invert max-w-none mb-6">
                    <p className="text-gray-700 dark:text-gray-300">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {selectedProject.highlights && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Points Clés</h4>
                      <ul className="space-y-2">
                        {selectedProject.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                            <span className="text-primary-500 mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/40 dark:to-secondary-900/40 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaGithub /> Voir le Code
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <FaExternalLinkAlt /> Voir la Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects