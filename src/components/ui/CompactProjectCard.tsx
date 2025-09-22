import React from 'react'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'

interface CompactProjectCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  techStack?: string[]
  link?: string
  status?: 'active' | 'beta' | 'coming-soon'
  className?: string
}

const statusColors = {
  'active': 'text-green-400',
  'beta': 'text-yellow-400',
  'coming-soon': 'text-blue-400',
}

export const CompactProjectCard: React.FC<CompactProjectCardProps> = ({
  title,
  description,
  icon,
  techStack = [],
  link,
  status = 'active',
  className,
}) => {
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
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-semibold gradient-text">
                {title}
              </h3>
              {status && (
                <span className={cn('text-xs', statusColors[status])}>
                  ●
                </span>
              )}
            </div>

            <p className="text-sm text-text-secondary mb-3 line-clamp-2">
              {description}
            </p>

            {/* Tech Stack - Compact */}
            {techStack.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {techStack.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-text-secondary border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
                {techStack.length > 3 && (
                  <span className="px-2 py-0.5 text-xs text-text-muted">
                    +{techStack.length - 3} more
                  </span>
                )}
              </div>
            )}

            {/* Link */}
            {link && link !== '#' && (
              <motion.a
                href={link}
                target={link.startsWith('/') ? '_self' : '_blank'}
                rel={link.startsWith('/') ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center text-sm text-accent-purple hover:text-accent-pink transition-colors duration-200"
                whileHover={{ x: 2 }}
                onClick={(e) => {
                  if (link.startsWith('/')) {
                    e.preventDefault()
                  } else {
                    e.stopPropagation()
                  }
                }}
              >
                <span>View Project</span>
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}