import React from 'react'
import { cn } from '../../lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  background?: 'default' | 'elevated' | 'glass' | 'gradient'
}

const paddingClasses = {
  none: '',
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16 lg:py-20',
  lg: 'py-16 md:py-24 lg:py-32',
  xl: 'py-24 md:py-32 lg:py-40',
}

const backgroundClasses = {
  default: '',
  elevated: 'bg-dark-elevated',
  glass: 'glass',
  gradient: 'bg-gradient-radial-purple',
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  padding = 'md',
  background = 'default',
}) => {
  return (
    <section
      className={cn(
        'relative overflow-hidden',
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      {children}
    </section>
  )
}