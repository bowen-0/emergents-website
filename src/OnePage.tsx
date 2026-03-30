import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { SinglePageLayout } from './components/layout/SinglePageLayout'
import { CompactProfile } from './components/sections/CompactProfile'
import { CompactProjectCard } from './components/ui/CompactProjectCard'
import { SystemicIcon } from './components/icons/SystemicIcon'
import { CoachifyIcon } from './components/icons/CoachifyIcon'
import './styles/globals.css'

const projects = [
  {
    title: 'Systemic',
    description: 'AI-powered systems maps in Miro. Live on the Miro Marketplace.',
    icon: <SystemicIcon className="w-full h-full" />,
    techStack: ['React', 'TypeScript', 'Node.js', 'AI/ML', 'Miro API'],
    status: 'live' as const,
    link: '/systemic',
    internal: true,
  },
  {
    title: 'Coachify',
    description: 'Voice-powered AI role-play for sales teams. Train anytime, master your sales technique.',
    icon: <CoachifyIcon className="w-full h-full" />,
    techStack: ['Next.js', 'Python', 'Voice AI', 'OpenAI', 'WebRTC'],
    status: 'early-access' as const,
    link: 'https://getcoachify.com',
    internal: false,
  },
]

const socialLinks = {
  github: 'https://github.com',
  linkedin: 'https://www.linkedin.com/in/bowen0/',
  email: 'bowen@emergents.io',
}

function OnePage() {
  const navigate = useNavigate()

  return (
    <SinglePageLayout>
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-start gap-4 md:gap-6 mt-4">
        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mb-4"
        >
          <img
            src="/emergents-logo.png"
            alt="Emergents"
            className="h-12 md:h-14 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
          />
        </motion.div>

        {/* Profile Section */}
        <CompactProfile
          name="Bowen"
          imageUrl="/profile.jpg"
        />

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                onClick={() => {
                  if (project.internal && project.link === '/systemic') {
                    navigate('/systemic')
                  } else if (!project.internal && project.link && project.link !== '#') {
                    window.open(project.link, '_blank', 'noopener,noreferrer')
                  }
                }}
              >
                <CompactProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Consulting Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full mt-10 mb-8"
        >
          {/* Separator */}
          <div className="w-full border-t border-white/10 mb-7" />

          {/* Content */}
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Work with Me
            </h2>
            <div className="text-base md:text-lg text-text-secondary mb-6">
              <p className="mb-3">I take on select AI projects:</p>
              <p className="text-sm md:text-base">
                Strategic guidance • Rapid prototypes • Full implementation
              </p>
            </div>
            <a
              href={`mailto:${socialLinks.email}?subject=Consulting%20Inquiry`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass border border-white/10 hover:border-accent-purple/30 transition-all duration-200 hover:scale-105 text-text-primary hover:text-accent-purple"
            >
              <span>Schedule a free consultation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Social Links - moved to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center gap-3 mt-8"
        >
          {socialLinks.linkedin && (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass border border-white/10 hover:border-accent-purple/30 transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
          {socialLinks.email && (
            <a
              href={`mailto:${socialLinks.email}`}
              className="p-2 rounded-full glass border border-white/10 hover:border-accent-purple/30 transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
        </motion.div>
      </div>
    </SinglePageLayout>
  )
}

export default OnePage