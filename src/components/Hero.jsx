import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaChevronDown } from 'react-icons/fa'
import { profile } from '../data/profile'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">

          {/* Animated Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <span className="text-5xl md:text-6xl">👨‍💻</span>
              </div>
            </div>
            {/* <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <img
                src="/images/DSC_5216.jpg"
                alt="Aimad EL HAMMDANI"
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800"
              />
            </div> */}
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
          >
            {profile.title}
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            {profile.bio}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {profile.stats.experience}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {profile.stats.projects}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                {profile.stats.technologies}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Technologies</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
            >
              <FaEnvelope />
              Me Contacter
            </button>
            <a
              href={profile.cvUrl}
              download
              className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center gap-2"
            >
              <FaDownload />
              Télécharger CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex justify-center gap-6"
          >
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 text-gray-700 dark:text-gray-300 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 text-gray-700 dark:text-gray-300 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={profile.social.email}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 text-gray-700 dark:text-gray-300 transition-all duration-300 transform hover:scale-110"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors animate-bounce"
      >
        <FaChevronDown size={32} />
      </motion.button>
    </section>
  )
}

export default Hero