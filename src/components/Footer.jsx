import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa'
import { profile } from '../data/profile'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      link: profile.social.github,
      label: 'GitHub'
    },
    {
      icon: <FaLinkedin size={20} />,
      link: profile.social.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: <FaEnvelope size={20} />,
      link: profile.social.email,
      label: 'Email'
    }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {profile.name.split(' ')[1]}
            </h3>
            <p className="text-gray-400 mb-4">
              {profile.title}
            </p>
            <p className="text-sm text-gray-500">
              {profile.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Navigation Rapide
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Suivez-moi
            </h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href={profile.cvUrl}
              download
              className="inline-block px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
            >
              Télécharger CV
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 flex items-center gap-1">
            © {currentYear} {profile.name}. Fait avec <FaHeart className="text-red-500" /> en React & Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-400 transition-colors group"
          >
            Retour en haut
            <FaArrowUp className="group-hover:translate-y-[-4px] transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer