import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { SinglePageLayout } from './components/layout/SinglePageLayout'
import { CompactProfile } from './components/sections/CompactProfile'
import { CompactProjectCard } from './components/ui/CompactProjectCard'
import { SystemicIcon } from './components/icons/SystemicIcon'
import { CoachifyIcon } from './components/icons/CoachifyIcon'
import './styles/globals.css'

const projects = [
  {
    title: 'Systemic',
    description: 'Systems mapping platform that transforms prompts into visual maps, enabling intelligent workflow automation.',
    icon: <SystemicIcon className="w-full h-full" />,
    techStack: ['React', 'TypeScript', 'Node.js', 'AI/ML', 'Miro API'],
    status: 'active' as const,
    link: '/systemic',
    internal: true,
  },
  {
    title: 'Coachify',
    description: 'Voice AI training platform for sales role-playing and professional development through conversational learning.',
    icon: <CoachifyIcon className="w-full h-full" />,
    techStack: ['Next.js', 'Python', 'Voice AI', 'OpenAI', 'WebRTC'],
    status: 'beta' as const,
    link: '#',
    internal: false,
  },
]

const socialLinks = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'bowen@example.com',
}

function OnePage() {
  const [currentPage, setCurrentPage] = useState<'main' | 'systemic'>('main')

  // Handle navigation
  if (currentPage === 'systemic') {
    const SystemicLanding = React.lazy(() => import('./SystemicLanding'))
    return (
      <React.Suspense fallback={
        <SinglePageLayout>
          <div className="flex items-center justify-center h-full">
            <div className="text-text-secondary">Loading...</div>
          </div>
        </SinglePageLayout>
      }>
        <SystemicLanding onBack={() => setCurrentPage('main')} />
      </React.Suspense>
    )
  }

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
          tagline="I'm building AI applications that change our way of working"
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
                    setCurrentPage('systemic')
                  }
                }}
              >
                <CompactProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Links - moved to bottom */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass border border-white/10 hover:border-accent-purple/30 transition-all duration-200 hover:scale-110"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
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