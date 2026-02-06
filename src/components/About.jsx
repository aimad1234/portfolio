import { motion } from 'framer-motion'
import { FaCode, FaServer, FaBrain, FaRocket } from 'react-icons/fa'
import { profile } from '../data/profile'

const About = () => {
  const highlights = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Développement Backend",
      description: "Expert en Django, Flask, FastAPI pour créer des APIs robustes et scalables"
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "DevOps & Infrastructure",
      description: "Automatisation avec Docker, Kubernetes, GitLab CI/CD et Ansible"
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Intelligence Artificielle",
      description: "Deep Learning, Computer Vision, et déploiement de modèles ML en production"
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Optimisation",
      description: "Performance, monitoring système, et réduction des délais de déploiement"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          À Propos
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line text-center">
                {profile.bioLong}
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
              <span className="text-2xl">📍</span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {profile.location}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About