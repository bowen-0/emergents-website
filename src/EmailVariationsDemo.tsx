import { motion } from 'framer-motion'
import { ScrollableLayout } from './components/layout/ScrollableLayout'
import { EmailCapture } from './components/sections/EmailCapture'

interface EmailVariationsDemoProps {
  onBack?: () => void
}

const variants = [
  {
    name: 'Default',
    variant: 'default' as const,
    description: 'Current minimal style with basic glass effect'
  },
  {
    name: 'Highlighted',
    variant: 'highlighted' as const,
    description: 'Glowing border with pulsing animation and corner accents'
  },
  {
    name: 'Gradient',
    variant: 'gradient' as const,
    description: 'Gradient background with enhanced glass effect'
  },
  {
    name: 'Floating',
    variant: 'floating' as const,
    description: 'Elevated card with shadows and blur orbs'
  },
  {
    name: 'Banner',
    variant: 'banner' as const,
    description: 'Full-width banner style with gradient background'
  }
]

function EmailVariationsDemo({ onBack }: EmailVariationsDemoProps) {
  return (
    <ScrollableLayout>
      <div className="w-full max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
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
            className="mb-8 flex items-center gap-2 text-text-secondary hover:text-accent-purple transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Systemic
          </motion.button>

          <h1 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Email Signup Variations</span>
          </h1>
          <p className="text-lg text-text-secondary">
            Choose the design that makes the signup section stand out most effectively
          </p>
        </div>

        {/* Variations Grid */}
        <div className="space-y-12">
          {variants.map((item, index) => (
            <motion.div
              key={item.variant}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-4"
            >
              {/* Variation Title */}
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-sm text-text-secondary max-w-md mx-auto">
                  {item.description}
                </p>
              </div>

              {/* Variation Example */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <EmailCapture variant={item.variant} />
                </div>
              </div>

              {/* Separator */}
              {index < variants.length - 1 && (
                <div className="border-t border-white/10 pt-8" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-sm text-text-muted mt-16"
        >
          <p>All variations maintain the same functionality - only the visual presentation changes</p>
        </motion.div>
      </div>
    </ScrollableLayout>
  )
}

export default EmailVariationsDemo