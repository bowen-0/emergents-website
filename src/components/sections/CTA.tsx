import React from 'react'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Button } from '../ui/Button'
import { GlowOrb } from '../ui/GlowOrb'

interface CTAProps {
  title: string
  description?: string
  primaryButton?: {
    label: string
    href: string
  }
  secondaryButton?: {
    label: string
    href: string
  }
  className?: string
}

export const CTA: React.FC<CTAProps> = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  className,
}) => {
  return (
    <Section padding="lg" className={cn('relative', className)}>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <GlowOrb size="lg" color="purple" className="top-0 left-1/4" animate />
        <GlowOrb size="md" color="pink" className="bottom-0 right-1/4" animate />
      </div>

      <Container>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-heavy rounded-2xl p-12 md:p-16 text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6"
            >
              {title}
            </motion.h2>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto"
              >
                {description}
              </motion.p>
            )}

            {(primaryButton || secondaryButton) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {primaryButton && (
                  <Button
                    size="lg"
                    variant="primary"
                    gradient
                    glow
                    onClick={() => window.location.href = primaryButton.href}
                  >
                    {primaryButton.label}
                  </Button>
                )}
                {secondaryButton && (
                  <Button
                    size="lg"
                    variant="glass"
                    onClick={() => window.location.href = secondaryButton.href}
                  >
                    {secondaryButton.label}
                  </Button>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}