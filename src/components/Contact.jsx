import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const contactMethods = [
    {
      icon: FaPhone,
      label: 'Phone',
      value: '7842703919',
      href: 'tel:7842703919',
      color: 'from-accent/90 to-zinc-700',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'bodlapatipavan@gmail.com',
      href: 'mailto:bodlapatipavan@gmail.com',
      color: 'from-accent/90 to-zinc-700',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/pavan2398',
      href: 'https://linkedin.com/in/pavan2398',
      color: 'from-accent/90 to-zinc-700',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/pavan2398',
      href: 'https://github.com/pavan2398',
      color: 'from-accent/90 to-zinc-700',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    const mailtoLink = `mailto:bodlapatipavan@gmail.com?subject=Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-gray-300 text-lg mb-8">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
            </p>

            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-4 p-6 glass-effect rounded-xl border border-dark-border hover:border-accent/40 transition-all group"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {(() => {
                    const IconComponent = method.icon
                    return <IconComponent className="text-accent text-xl" />
                  })()}
                </motion.div>
                <div className="flex-1">
                  <div className="text-gray-400 text-sm mb-1">{method.label}</div>
                  <div className="text-gray-200 font-medium group-hover:text-accent transition-colors">
                    {method.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass-effect rounded-2xl p-6 md:p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-gray-100 focus:outline-none focus:border-accent transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-gray-100 focus:outline-none focus:border-accent transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows="5"
                className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg text-gray-100 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent/15 border border-accent/25 rounded-lg text-gray-100 font-semibold hover:shadow-lg transition-shadow"
            >
              <span>Send Message</span>
              <FaPaperPlane />
            </motion.button>
          </motion.form>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 text-center text-gray-400"
      >
        <p>© {new Date().getFullYear()} Bala Venkata Pavan. All rights reserved.</p>
      </motion.footer>
    </section>
  )
}

export default Contact
