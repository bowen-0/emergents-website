import React from 'react'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { GlowOrb } from '../ui/GlowOrb'

interface HeroProps {
  badge?: string
  title: string | React.ReactNode
  subtitle?: string
  description?: string
  primaryCTA?: {
    label: string
    href: string
  }
  secondaryCTA?: {
    label: string
    href: string
  }
  className?: string
  centered?: boolean
}

export const Hero: React.FC<HeroProps> = ({
  badge,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  className,
  centered = true,
}) => {
  return (
    <section className={cn('relative min-h-screen flex items-center overflow-hidden', className)}>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <GlowOrb size="xl" color="purple" className="top-20 -left-48" />
        <GlowOrb size="lg" color="pink" className="bottom-20 -right-32" />
        <GlowOrb size="md" color="blue" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            'max-w-5xl',
            centered && 'mx-auto text-center'
          )}
        >
          {/* Badge */}
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <Badge variant="gradient" size="md">
                {badge}
              </Badge>
            </motion.div>
          )}

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            {typeof title === 'string' ? (
              <span className="gradient-text">{title}</span>
            ) : (
              title
            )}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl md:text-3xl text-text-secondary mb-8"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-text-secondary mb-12 max-w-3xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {primaryCTA && (
                <Button
                  size="lg"
                  variant="primary"
                  gradient
                  glow
                  onClick={() => window.location.href = primaryCTA.href}
                >
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button
                  size="lg"
                  variant="glass"
                  onClick={() => window.location.href = secondaryCTA.href}
                >
                  {secondaryCTA.label}
                </Button>
              )}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}