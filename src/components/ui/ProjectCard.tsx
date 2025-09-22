import React from 'react'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'
import { Badge } from './Badge'

interface ProjectCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  techStack?: string[]
  link?: string
  status?: 'active' | 'beta' | 'coming-soon'
  className?: string
}

const statusConfig = {
  'active': { label: 'Active', variant: 'gradient' as const },
  'beta': { label: 'Beta', variant: 'outline' as const },
  'coming-soon': { label: 'Coming Soon', variant: 'glass' as const },
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
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
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className={cn(
        'relative group',
        className
      )}
    >
      {/* Card Container */}
      <div className="relative h-full glass rounded-card border border-white/10 p-8 transition-all duration-300 group-hover:border-accent-purple/30">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 rounded-card bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="relative z-10">
          {/* Status Badge */}
          {status && (
            <div className="absolute top-0 right-0">
              <Badge variant={statusConfig[status].variant} size="sm">
                {statusConfig[status].label}
              </Badge>
            </div>
          )}

          {/* Icon */}
          {icon ? (
            <div className="mb-6 text-accent-purple">
              {icon}
            </div>
          ) : (
            <div className="mb-6 w-14 h-14 rounded-glass bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {title.charAt(0)}
              </span>
            </div>
          )}

          {/* Title */}
          <h3 className="text-2xl font-semibold mb-3 gradient-text">
            {title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary mb-6 line-clamp-3">
            {description}
          </p>

          {/* Tech Stack */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 text-text-secondary border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Link */}
          {link && (
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-accent-purple hover:text-accent-pink transition-colors duration-200"
              whileHover={{ x: 4 }}
            >
              <span className="mr-2">Learn More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          )}
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-0.5 rounded-card bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
      </div>
    </motion.div>
  )
}