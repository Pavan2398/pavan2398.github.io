import { motion, useInView } from 'framer-motion'
import { useMemo, useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const rows = useMemo(() => {
    const row1 = [
      'Tailwind CSS',
      'JavaScript (ES6+)',
      'React.js',
      'Redux',
      'Node.js',
      'Express.js',
      'Socket.IO',
      'HTML5',
      'CSS3',
      'Git',
      'GitHub',
      'Docker',
    ]
    const row2 = [
      'MongoDB',
      'MongoDB Atlas',
      'RESTful APIs',
      'Swagger',
      'OAuth 2.0',
      'JWT',
      'RBAC',
      'Jest',
      'Supertest',
      'API Testing',
      'Python',
      'Scikit-learn',
    ]

    // Build a seamless marquee by duplicating each row
    const dup = (arr) => [...arr, ...arr]
    return { row1: dup(row1), row2: dup(row2) }
  }, [])

  const Pill = ({ label }) => (
    <motion.div
      whileHover={{ y: -2, scale: 1.03 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full border border-dark-border bg-dark-card/40 text-gray-300 text-sm whitespace-nowrap"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent/80" />
      <span>{label}</span>
    </motion.div>
  )

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Tools and Technologies I Use</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            A quick look at what I use to build real-time, scalable web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-5"
        >
          {/* Row 1 */}
          <div className="marquee marquee-left">
            <div className="marquee-track gap-3 py-2">
              {rows.row1.map((label, idx) => (
                <Pill key={`${label}-${idx}`} label={label} />
              ))}
            </div>
          </div>

          {/* Row 2 (reverse) */}
          <div className="marquee marquee-right">
            <div className="marquee-track gap-3 py-2">
              {rows.row2.map((label, idx) => (
                <Pill key={`${label}-${idx}`} label={label} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
