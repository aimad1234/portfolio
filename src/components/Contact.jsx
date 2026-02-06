import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import { profile } from '../data/profile'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Construct mailto link
    const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    window.location.href = mailtoLink

    setStatus({
      type: 'success',
      message: 'Ouverture de votre client email...'
    })

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setStatus({ type: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: profile.email,
      link: `mailto:${profile.email}`
    },
    {
      icon: <FaPhone />,
      title: 'Téléphone',
      value: profile.phone,
      link: `tel:${profile.phone}`
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: profile.location,
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      name: 'GitHub',
      link: profile.social.github
    },
    {
      icon: <FaLinkedin size={24} />,
      name: 'LinkedIn',
      link: profile.social.linkedin
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Me Contacter
        </motion.h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                  Restons en Contact
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  N'hésitez pas à me contacter pour discuter de projets, opportunités de collaboration,
                  ou simplement pour échanger sur les technologies.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="text-2xl text-primary-600 dark:text-primary-400 mt-1">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Réseaux Sociaux
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="input-field resize-none"
                    placeholder="Votre message..."
                  />
                </div>

                {status.message && (
                  <div className={`p-4 rounded-lg ${status.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
                    }`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-medium hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <FaPaperPlane />
                  Envoyer le Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact