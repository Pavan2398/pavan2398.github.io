import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const education = {
    institution: 'Indian Institute of Information Technology, Sri City',
    degree: 'Bachelor of Technology in Computer Science',
    period: 'Nov. 2022 – May 2026',
    location: 'Sri City, Andhra Pradesh',
    courses: [
      'Data Structures & Algorithms',
      'Web Development',
      'Computer Networks',
      'Machine Learning',
      'Software Engineering',
      'Operating Systems',
    ],
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-surface/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-gradient"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/60 to-zinc-700/40 transform md:-translate-x-1/2" />

          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start gap-8">
              {/* Timeline Dot */}
              <div className="relative z-10 flex-shrink-0">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-accent/90 to-zinc-700 rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.2 }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <FaGraduationCap className="text-white text-xl" />
                </motion.div>
              </div>

              {/* Content Card */}
              <motion.div
                className="flex-1 glass-effect rounded-2xl p-6 md:p-8 mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-2">
                  {education.degree}
                </h3>
                <h4 className="text-xl md:text-2xl text-accent mb-4">
                  {education.institution}
                </h4>

                <div className="flex flex-wrap gap-4 mb-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-accent" />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-accent" />
                    <span>{education.location}</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-gray-200 mb-3">
                    Relevant Coursework:
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {education.courses.map((course, index) => (
                      <motion.div
                        key={course}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-2 p-3 bg-dark-card rounded-lg border border-dark-border"
                        whileHover={{ x: 5, borderColor: '#7dd3fc' }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="text-gray-300">{course}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
