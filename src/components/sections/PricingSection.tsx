import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'
import { Badge } from '../ui/Badge'

interface PricingSectionProps {
  miroMarketplaceUrl: string
  className?: string
}

const checkIcon = (
  <svg className="w-4 h-4 text-accent-purple flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

const freePlan = {
  name: 'Free',
  price: '€0',
  period: '/month',
  features: [
    'AI systems map generation',
    'Intelligently expand maps',
    'Auto-format',
    'System summaries',
  ],
}

const proPlan = {
  name: 'Pro',
  price: '€10',
  period: '/month',
  features: [
    'Everything in Free',
    'Research-backed citations',
    'Deeper analysis',
    'Upload your own sources',
    '100 Pro actions/month',
    'Priority support',
  ],
}

export const PricingSection: React.FC<PricingSectionProps> = ({ miroMarketplaceUrl, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn('w-full', className)}
    >
      <h3 className="text-2xl font-semibold text-center mb-8">
        <span className="gradient-text">Simple Pricing</span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Free Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-xl border border-white/10 p-8 flex flex-col"
        >
          <h4 className="text-lg font-semibold mb-1">{freePlan.name}</h4>
          <div className="mb-6">
            <span className="text-3xl font-bold">{freePlan.price}</span>
            <span className="text-text-secondary text-sm">{freePlan.period}</span>
          </div>

          <ul className="space-y-3 flex-1">
            {freePlan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                {checkIcon}
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Pro Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass rounded-xl border-2 border-accent-purple/30 p-8 flex flex-col relative overflow-hidden"
        >
          {/* Purple glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-purple/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-lg font-semibold">{proPlan.name}</h4>
              <Badge variant="gradient" size="sm">Early Supporter Price</Badge>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-bold">{proPlan.price}</span>
              <span className="text-text-secondary text-sm">{proPlan.period}</span>
            </div>

            <ul className="space-y-3 flex-1">
              {proPlan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                  {checkIcon}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Shared CTA */}
      <div className="text-center mt-8">
        <a
          href={miroMarketplaceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-200',
            'bg-gradient-to-r from-violet-700 to-purple-600',
            'hover:shadow-lg hover:shadow-purple-700/25 hover:scale-[1.02]'
          )}
        >
          Install on Miro
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <p className="text-xs text-text-muted mt-3">Upgrade to Pro anytime from within the app</p>
      </div>
    </motion.div>
  )
}
