import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiX, FiMenu } from 'react-icons/fi';
import { FaReact } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'achievements', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: <FiGithub className="w-5 h-5" />, url: 'https://github.com/yourusername' },
    { icon: <FiLinkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/yourprofile' },
    { icon: <FiMail className="w-5 h-5" />, url: 'mailto:youremail@example.com' },
    { icon: <FiPhone className="w-5 h-5" />, url: 'tel:+1234567890' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md py-2 shadow-xl' : 'bg-gray-900/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Brand with enhanced styling */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('home')}
            className="flex items-center cursor-pointer group"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="mr-3 p-2 bg-blue-600/20 rounded-lg"
            >
              <FaReact className="text-blue-400 text-2xl" />
            </motion.div>
            <span className="text-xl font-bold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Mahesh Singh
            </span>
          </motion.div>

          {/* Desktop Navigation with improved boxing */}
          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-1 bg-gray-800/50 rounded-full p-1 border border-gray-700 shadow-inner">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        activeSection === link.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                      }`}
                    >
                      {link.label}
                      {activeSection === link.id && (
                        <motion.span
                          layoutId="activeIndicator"
                          className="absolute inset-0 rounded-full border border-blue-300/50"
                          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Icons with proper spacing */}
            <div className="flex items-center space-x-3 ml-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-gray-700/50"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button with better styling */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6 text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-white" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation with improved design */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-700"
            >
              <ul className="space-y-3 mb-4">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 * navLinks.indexOf(link) }}
                  >
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        activeSection === link.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Social Icons with proper spacing */}
              <div className="flex justify-center space-x-4 pt-2 border-t border-gray-700">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 text-gray-300 hover:text-white transition-colors rounded-full hover:bg-gray-700/50"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;