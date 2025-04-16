// src/components/Contact.jsx
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className="py-12">
      <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
      
      <p className="text-gray-300 mb-8 max-w-3xl">
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out to me through any of the channels below.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <FiMail className="text-blue-400 mt-1 mr-4" />
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <a href="mailto:singhmahesh2924@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                    singhmahesh2924@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiPhone className="text-blue-400 mt-1 mr-4" />
                <div>
                  <h4 className="text-gray-400 text-sm">Phone</h4>
                  <a href="tel:+916284492546" className="text-white hover:text-blue-400 transition-colors">
                    +91 6284492546
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiLinkedin className="text-blue-400 mt-1 mr-4" />
                <div>
                  <h4 className="text-gray-400 text-sm">LinkedIn</h4>
                  <a 
                    href="https://linkedin.com/in/maheshsingh20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    linkedin.com/in/maheshsingh20
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiGithub className="text-blue-400 mt-1 mr-4" />
                <div>
                  <h4 className="text-gray-400 text-sm">GitHub</h4>
                  <a 
                    href="https://github.com/maheshsingh20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    github.com/maheshsingh20
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FiMapPin className="text-blue-400 mt-1 mr-4" />
                <div>
                  <h4 className="text-gray-400 text-sm">Location</h4>
                  <p className="text-white">Lovely Professional University, Punjab, India</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="card">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact