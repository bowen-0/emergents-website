import React from 'react'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'
import { Container } from '../layout/Container'
import { Section } from '../layout/Section'
import { ProjectCard } from '../ui/ProjectCard'

export interface Project {
  title: string
  description: string
  icon?: React.ReactNode
  techStack?: string[]
  link?: string
  status?: 'active' | 'beta' | 'coming-soon'
}

interface ProjectsGridProps {
  title?: string
  subtitle?: string
  projects: Project[]
  className?: string
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({
  title = "What I'm Building",
  subtitle,
  projects,
  className,
}) => {
  return (
    <Section padding="lg" className={cn('relative', className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-pink/10 rounded-full blur-3xl" />
      </div>

      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold gradient-text mb-4"
          >
            {title}
          </motion.h2>
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Optional CTA or additional content */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-text-secondary text-lg">
              Exciting projects coming soon...
            </p>
          </motion.div>
        )}
      </Container>
    </Section>
  )
}