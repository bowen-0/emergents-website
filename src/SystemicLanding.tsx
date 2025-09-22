import React from 'react'
import { motion } from 'framer-motion'
import { SinglePageLayout } from './components/layout/SinglePageLayout'
import { SystemicIcon } from './components/icons/SystemicIcon'
import { EmailCapture } from './components/sections/EmailCapture'
import { SystemMapDemo } from './components/sections/SystemMapDemo'

interface SystemicLandingProps {
  onBack?: () => void
}

const features = [
  {
    title: 'Create',
    description: 'Transform prompts into visual systems maps',
    icon: '✨',
  },
  {
    title: 'Expand',
    description: 'Enhance existing maps with natural language',
    icon: '🔄',
  },
  {
    title: 'Layout',
    description: 'Auto-organize complex relationships',
    icon: '📐',
  },
  {
    title: 'Summarize',
    description: 'Generate executive narratives',
    icon: '📝',
  },
]

function SystemicLanding({ onBack }: SystemicLandingProps) {

  return (
    <SinglePageLayout>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-start gap-8 md:gap-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            if (onBack) {
              onBack()
            } else {
              window.location.href = '/'
            }
          }}
          className="self-start flex items-center gap-2 text-text-secondary hover:text-accent-purple transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center"
        >
          {/* Icon and Title */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 md:w-24 md:h-24"
            >
              <SystemicIcon className="w-full h-full" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="gradient-text">Systemic</span>
            </h1>
          </div>

          {/* Tagline */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Systems Thinking Made Simple
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Transform complex ideas into clear visual maps with{' '}
            <span className="text-white">AI-powered Miro integration</span>.
            Whether you're new to systems thinking or looking to rapidly prototype ideas,
            Systemic makes it accessible to everyone.
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-yellow-400/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-sm text-yellow-400">Coming Soon to Miro Marketplace</span>
          </div>
        </motion.div>

        {/* Visual Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-3xl"
        >
          <SystemMapDemo />
        </motion.div>

        {/* Email Capture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-md"
        >
          <EmailCapture />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            What You Can Do with <span className="gradient-text">Systemic</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass rounded-xl border border-white/10 p-6 hover:border-accent-purple/30 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Example Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full max-w-3xl text-center"
        >
          <h3 className="text-xl font-semibold mb-4 text-text-secondary">Perfect for:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Strategic Planning', 'Problem Analysis', 'Process Mapping', 'Stakeholder Alignment', 'Education', 'Research'].map((useCase) => (
              <span
                key={useCase}
                className="px-4 py-2 rounded-full bg-white/5 text-sm text-text-secondary border border-white/10"
              >
                {useCase}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-sm text-text-muted mt-8"
        >
          <p>A Miro App by Emergents</p>
        </motion.div>
      </div>
    </SinglePageLayout>
  )
}

export default SystemicLanding