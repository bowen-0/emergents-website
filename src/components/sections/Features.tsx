import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { Grid } from '../layout/Grid'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'

export interface Feature {
  icon?: React.ReactNode
  title: string
  description: string
  link?: {
    label: string
    href: string
  }
}

interface FeaturesProps {
  title?: string
  subtitle?: string
  features: Feature[]
  columns?: 2 | 3 | 4
  className?: string
  cardVariant?: 'default' | 'glass' | 'elevated' | 'gradient'
}

export const Features: React.FC<FeaturesProps> = ({
  title,
  subtitle,
  features,
  columns = 3,
  className,
  cardVariant = 'glass',
}) => {
  return (
    <Section padding="lg" className={className}>
      <Container>
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold gradient-text mb-4"
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-text-secondary max-w-3xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <Grid cols={columns} gap="lg">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card variant={cardVariant} hover className="h-full">
                <CardHeader>
                  {feature.icon && (
                    <div className="mb-4 text-accent-purple">
                      {feature.icon}
                    </div>
                  )}
                  <CardTitle gradient>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{feature.description}</p>
                  {feature.link && (
                    <a
                      href={feature.link.href}
                      className="text-accent-purple hover:text-accent-pink transition-colors duration-200"
                    >
                      {feature.link.label} →
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}