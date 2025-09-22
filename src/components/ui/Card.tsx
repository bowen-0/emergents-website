import React from 'react'
import { cn } from '../../lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: 'default' | 'glass' | 'elevated' | 'gradient'
  hover?: boolean
  glow?: boolean
  children: React.ReactNode
  className?: string
}

const variantClasses = {
  default: 'bg-dark-surface border-white/10',
  glass: 'glass',
  elevated: 'bg-dark-elevated border-white/5',
  gradient: 'bg-gradient-to-br from-dark-surface to-dark-elevated border-accent-purple/20',
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  hover = false,
  glow = false,
  children,
  className,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'rounded-card border p-6 transition-all duration-200',
        variantClasses[variant],
        hover && 'hover:border-accent-purple/30',
        glow && 'glow-purple',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  )
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
  gradient?: boolean
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className, gradient }) => {
  return (
    <h3 className={cn(
      'text-2xl font-semibold',
      gradient && 'gradient-text',
      className
    )}>
      {children}
    </h3>
  )
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={cn('text-text-secondary', className)}>
      {children}
    </div>
  )
}