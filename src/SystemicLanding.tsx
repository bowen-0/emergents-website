import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ScrollableLayout } from './components/layout/ScrollableLayout'
import { SystemicIcon } from './components/icons/SystemicIcon'
import { EmailCapture } from './components/sections/EmailCapture'
import { SystemMapDemo } from './components/sections/SystemMapDemo'
import { VideoDemo } from './components/sections/VideoDemo'
import { PricingSection } from './components/sections/PricingSection'
import { Badge } from './components/ui/Badge'

const MIRO_MARKETPLACE_URL = 'https://miro.com/marketplace/systemic/'
const YOUTUBE_VIDEO_ID = 'TlP4CL40FME'

interface SystemicLandingProps {
  onBack?: () => void
}

interface Feature {
  title: string
  description: string
  icon: string
  pro?: boolean
}

const features: Feature[] = [
  {
    title: 'Create',
    description: 'Transform prompts into visual systems maps with AI',
    icon: '✨',
  },
  {
    title: 'Expand',
    description: 'Enhance existing maps with natural language',
    icon: '🔄',
  },
  {
    title: 'Auto-Format',
    description: 'Automatically organize your systems map layout',
    icon: '📐',
  },
  {
    title: 'Summarize',
    description: 'Generate system summary cards and descriptions',
    icon: '📝',
  },
  {
    title: 'Research',
    description: 'Get research-backed citations and deeper analysis',
    icon: '🔬',
    pro: true,
  },
  {
    title: 'Your Sources',
    description: 'Upload URLs and PDFs as source material',
    icon: '📎',
    pro: true,
  },
]

function SystemicLanding({ onBack }: SystemicLandingProps) {
  const navigate = useNavigate()

  return (
    <ScrollableLayout>
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-start gap-12 md:gap-20">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => {
            if (onBack) {
              onBack()
            } else {
              navigate('/')
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
          {/* Brand Group - Icon + Title */}
          <div className="flex flex-col items-center gap-6 mb-6">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 md:w-24 md:h-24"
            >
              <SystemicIcon className="w-full h-full" />
            </motion.div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="gradient-text">Systemic</span>
              </h1>
            </div>
          </div>

          {/* Live Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Live on Miro Marketplace
            </span>
          </motion.div>

          {/* Value Proposition */}
          <div className="mb-8">
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              <span className="text-white/90">
                Turn simple prompts into AI-generated systems maps in Miro.
                <br />
                Visualise causal relationships. Explore feedback loops.
              </span>
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col items-center gap-4">
            <a
              href={MIRO_MARKETPLACE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-violet-700 to-purple-600 hover:shadow-lg hover:shadow-purple-700/25 hover:scale-[1.02] transition-all duration-200"
            >
              Install on Miro
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="#video-demo"
              className="text-sm text-text-secondary hover:text-accent-purple transition-colors"
            >
              Watch the demo ↓
            </a>
          </div>
        </motion.div>

        {/* SVG Demo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-3xl"
        >
          <SystemMapDemo />
        </motion.div>

        {/* Video Demo */}
        <div className="w-full max-w-3xl">
          <VideoDemo videoId={YOUTUBE_VIDEO_ID} />
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            <span className="gradient-text">Systemic</span> helps you to:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="glass rounded-xl border border-white/10 p-6 hover:border-accent-purple/30 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2 flex items-center justify-center gap-2">
                  {feature.title}
                  {feature.pro && <Badge variant="gradient" size="sm">Pro</Badge>}
                </h4>
                <p className="text-sm text-text-secondary">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing */}
        <PricingSection miroMarketplaceUrl={MIRO_MARKETPLACE_URL} />

        {/* Example Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full max-w-3xl text-center"
        >
          <h3 className="text-xl font-semibold mb-4 text-text-secondary">Great for:</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Systems Analysis', 'Consulting', 'Strategic Planning', 'Education', 'Research'].map((useCase) => (
              <span
                key={useCase}
                className="px-4 py-2 rounded-full bg-white/5 text-sm text-text-secondary border border-white/10"
              >
                {useCase}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="w-full max-w-md"
        >
          <EmailCapture variant="floating" mode="newsletter" />
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-sm text-text-muted mt-8"
        >
          <p>
            A Miro App by Emergents | {' '}
            <a
              href="/systemic/privacy"
              className="text-text-secondary hover:text-accent-purple transition-colors underline"
            >
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </ScrollableLayout>
  )
}

export default SystemicLanding
