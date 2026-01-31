import { motion, useInView } from 'framer-motion'
import { useMemo, useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { SiReact, SiNodedotjs, SiMongodb, SiDocker, SiSocketdotio, SiPython } from 'react-icons/si'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = useMemo(
    () => [
      {
        title: 'Real-Time Auction Platform',
        description:
          'Developed a secure, real-time auction platform with OTP-based email verification and scalable RESTful APIs, enabling authenticated bidding for 500+ users.',
        highlights: [
          'Integrated Socket.IO for sub-second bid updates, improving engagement by 35%',
          'Implemented Dockerized deployment with docker-compose, cutting environment setup time by 70%',
        ],
        tech: [
          { name: 'React.js', icon: SiReact },
          { name: 'Node.js', icon: SiNodedotjs },
          { name: 'MongoDB', icon: SiMongodb },
          { name: 'Socket.IO', icon: SiSocketdotio },
          { name: 'Docker', icon: SiDocker },
        ],
        github: 'https://github.com/pavan2398',
        demo: '#',
        color: 'from-accent/90 to-zinc-700',
      },
      {
        title: 'Real-Time Chat Application',
        description:
          'Built a real-time chat system supporting private/group messaging, live notifications, and presence updates for 1,000+ concurrent users.',
        highlights: [
          'Integrated JWT authentication and RBAC for secure access',
          'Reduced message latency by 60%',
          'Added E2E Cypress tests to ensure 98% uptime and stable message synchronization across releases',
        ],
        tech: [
          { name: 'React.js', icon: SiReact },
          { name: 'Node.js', icon: SiNodedotjs },
          { name: 'MongoDB', icon: SiMongodb },
          { name: 'Socket.IO', icon: SiSocketdotio },
        ],
        github: 'https://github.com/pavan2398',
        demo: '#',
        color: 'from-accent/90 to-zinc-700',
      },
      {
        title: 'Bank Marketing Campaign Analysis & Prediction',
        description:
          'Analyzed 45K+ records from the UCI Bank dataset to predict term deposit subscriptions with 89% accuracy.',
        highlights: [
          'Built a complete ML pipeline covering data preprocessing, feature selection, and model evaluation',
          'Reduced manual processing by 60%',
          'Generated actionable insights for targeted marketing, improving prediction precision by 35%',
        ],
        tech: [
          { name: 'Python', icon: SiPython },
          { name: 'Scikit-learn' },
          { name: 'Pandas' },
        ],
        github: 'https://github.com/pavan2398',
        demo: '#',
        color: 'from-accent/90 to-zinc-700',
      },
      {
        title: 'Dynamic AI Chatbot — Emotion & Sentiment Analysis',
        description:
          'Built an intelligent chatbot integrating BERT-based emotion & sentiment models, achieving 90.77% validation accuracy across 6 emotion and 3 sentiment categories.',
        highlights: [
          'Multi-task learning for real-time dual classification; improved response relevance by 40%',
          'Flask inference API for 5,000+ concurrent users with ~180ms average response time',
          'Quantization + ONNX optimization reduced inference latency by 35% in production',
        ],
        tech: [
          { name: 'Python', icon: SiPython },
          { name: 'PyTorch' },
          { name: 'Transformers' },
          { name: 'BERT' },
          { name: 'Flask' },
        ],
        github: 'https://github.com/pavan2398',
        demo: '#',
        color: 'from-accent/90 to-zinc-700',
      },
      {
        title: 'Customer Segmentation System',
        description:
          'Constructed a customer grouping framework using K-Means and Hierarchical Clustering, identifying 4 distinct behavioral clusters from 2,000+ customer records.',
        highlights: [
          'Feature scaling/encoding + dimensionality reduction improved silhouette score by 23% vs baseline',
          'Validated with Davies–Bouldin & Silhouette metrics (K-Means outperformed hierarchical by 27%)',
        ],
        tech: [
          { name: 'Python', icon: SiPython },
          { name: 'Scikit-learn' },
          { name: 'Pandas' },
          { name: 'NumPy' },
          { name: 'Matplotlib' },
        ],
        github: 'https://github.com/pavan2398',
        demo: '#',
        color: 'from-accent/90 to-zinc-700',
      },
    ],
    [],
  )

  const viewportRef = useRef(null)
  const trackRef = useRef(null)

  const scrollByOneCard = (dir) => {
    const viewport = viewportRef.current
    if (!viewport) return

    const track = trackRef.current
    const firstCard = track?.querySelector('[data-project-card=\"true\"]')
    if (!firstCard) return

    const cardWidth = firstCard.getBoundingClientRect().width
    const gapRaw = track ? getComputedStyle(track).gap || getComputedStyle(track).columnGap : '0'
    const gap = Number.parseFloat(gapRaw) || 0
    const amount = cardWidth + gap

    viewport.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-surface/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">Projects</h2>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-dark-surface/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-dark-surface/80 to-transparent" />

          {/* Buttons near the cards (not on top of them) */}
          <div className="absolute inset-y-0 left-0 z-10 flex items-center">
            <button
              type="button"
              onClick={() => scrollByOneCard(-1)}
              className="ml-2 h-9 w-9 rounded-full border border-dark-border bg-dark-bg/60 backdrop-blur text-gray-200 hover:border-accent/40 hover:text-accent transition-colors grid place-items-center"
              aria-label="Previous projects"
            >
              <span className="text-lg leading-none">{'<'}</span>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 z-10 flex items-center">
            <button
              type="button"
              onClick={() => scrollByOneCard(1)}
              className="mr-2 h-9 w-9 rounded-full border border-dark-border bg-dark-bg/60 backdrop-blur text-gray-200 hover:border-accent/40 hover:text-accent transition-colors grid place-items-center"
              aria-label="Next projects"
            >
              <span className="text-lg leading-none">{'>'}</span>
            </button>
          </div>

          <div ref={viewportRef} className="no-scrollbar overflow-x-auto scroll-smooth">
            <div ref={trackRef} className="flex gap-6 py-2 snap-x snap-mandatory">
              {projects.map((project) => (
                <motion.div
                    key={project.title}
                    data-project-card="true"
                    whileHover={{ y: -4 }}
                    className="glass-effect rounded-xl p-5 border border-dark-border hover:border-accent/40 transition-all flex flex-col snap-start shrink-0 w-[85%] md:w-[48%] lg:w-[32%]"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-3">
                      {project.tech[0]?.icon && (
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}
                        >
                          {(() => {
                            const IconComponent = project.tech[0].icon
                            return <IconComponent className="text-white text-lg" />
                          })()}
                        </div>
                      )}
                      <h3 className="text-lg md:text-xl font-bold text-gray-100 leading-tight">{project.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.description}</p>

                    {/* Highlights (compact) */}
                    <div className="mt-4 space-y-2">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.color} mt-1.5 flex-shrink-0`} />
                          <span className="text-gray-500 text-xs leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map(({ name, icon: Icon }) => (
                        <div
                          key={name}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-dark-card/50 rounded-md border border-dark-border"
                        >
                          {Icon && <Icon className="text-accent text-xs" />}
                          <span className="text-gray-300 text-xs">{name}</span>
                        </div>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-gray-500 text-xs px-2 py-1">+{project.tech.length - 4}</span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="mt-5 flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-dark-card rounded-lg border border-dark-border text-gray-200 hover:text-accent hover:border-accent/40 transition-colors text-sm"
                      >
                        <FaGithub />
                        <span>Code</span>
                      </a>
                      {project.demo !== '#' && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-accent/15 rounded-lg text-gray-100 border border-accent/25 hover:shadow-lg transition-shadow text-sm"
                        >
                          <FaExternalLinkAlt />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
