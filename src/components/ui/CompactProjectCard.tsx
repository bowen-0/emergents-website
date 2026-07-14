import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'

interface CompactProjectCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  link?: string
  status?: 'active' | 'beta' | 'live' | 'early-access'
  className?: string
}


const statusConfig = {
  live: { label: 'Live', dotClass: 'bg-green-400', badgeClass: 'bg-green-500/10 text-green-400 border-green-500/20', pulse: true },
  beta: { label: 'Beta', dotClass: 'bg-amber-400', badgeClass: 'bg-amber-500/10 text-amber-400 border-amber-500/20', pulse: false },
  active: { label: 'Active', dotClass: 'bg-accent-purple', badgeClass: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20', pulse: false },
  'early-access': { label: 'Early Access', dotClass: 'bg-sky-400', badgeClass: 'bg-sky-500/10 text-sky-400 border-sky-500/20', pulse: false },
}

export const CompactProjectCard: React.FC<CompactProjectCardProps> = ({
  title,
  description,
  icon,
  link,
  status,
  className,
}) => {
  const isInternal = !!link && link.startsWith('/')

  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={cn(
        'relative group cursor-pointer',
        className
      )}
    >
      <div className="glass rounded-xl border border-white/10 p-6 transition-all duration-300 group-hover:border-accent-purple/30">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-purple/5 to-accent-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex items-start gap-4">
          {/* Icon/Logo */}
          <div className="flex-shrink-0">
            {icon ? (
              <div className="w-12 h-12">
                {icon}
              </div>
            ) : (
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center">
                <span className="text-xl font-bold text-white">
                  {title.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-xl font-semibold gradient-text">
                {title}
              </h3>
              {status && (
                <span className={cn(
                  'inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-full border',
                  statusConfig[status].badgeClass
                )}>
                  <span className={cn(
                    'w-1.5 h-1.5 rounded-full',
                    statusConfig[status].dotClass,
                    status === 'live' && 'animate-pulse'
                  )} />
                  {statusConfig[status].label}
                </span>
              )}
            </div>

            <p className="text-sm text-text-secondary mb-4 line-clamp-none md:line-clamp-2">
              {description}
            </p>

            {/* Link */}
            {link && link !== '#' && (
              <motion.a
                href={link}
                target={isInternal ? '_self' : '_blank'}
                rel={isInternal ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center text-sm text-accent-purple hover:text-accent-pink transition-colors duration-200"
                whileHover={{ x: 2 }}
                onClick={(e) => {
                  e.stopPropagation()
                  if (!isInternal) {
                    e.preventDefault()
                    window.open(link, '_blank', 'noopener,noreferrer')
                  }
                }}
              >
                <span>{isInternal ? 'Learn more' : 'Visit site'}</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isInternal ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M13 6l6 6-6 6" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M8 7h9v9" />
                  )}
                </svg>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}