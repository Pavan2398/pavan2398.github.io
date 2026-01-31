import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/pavan2398', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/pavan2398', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:bodlapatipavan@gmail.com', label: 'Email' },
    { icon: FaPhone, href: 'tel:7842703919', label: 'Phone' },
  ]

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <span className="text-gradient">Bala Venkata Pavan</span>
            </motion.h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <h2 className="text-2xl md:text-4xl text-gray-300 mb-4">
              Computer Science Student
            </h2>
            <p className="text-xl md:text-2xl text-gray-400">
              Full-Stack Developer & ML Enthusiast
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <FaPhone className="text-accent" />
                7842703919
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelope className="text-accent" />
                bodlapatipavan@gmail.com
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 mb-12"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-4 glass-effect rounded-full text-gray-300 hover:text-accent transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 mx-auto px-6 py-3 glass-effect rounded-full text-gray-300 hover:text-accent transition-colors"
            >
              <span>Explore More</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <HiArrowDown size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
