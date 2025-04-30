// src/components/Footer.jsx
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="bg-gray-800/50 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Mahesh Singh</h3>
            <p className="text-gray-400">Full Stack Developer & DevOps Enthusiast</p>
          </div>
          
          <div className="flex space-x-6" id='foot-icon'>
            <a 
              href="https://github.com/maheshsingh20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/maheshsingh20" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:singhmahesh2924@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
            <a 
              href="tel:+916284492546" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Phone"
            >
              <FiPhone className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mahesh Singh. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React, Vite, and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer