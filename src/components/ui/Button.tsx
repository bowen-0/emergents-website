import React from 'react'
import { cn } from '../../lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  glow?: boolean
  gradient?: boolean
  children: React.ReactNode
  className?: string
}

const variantClasses = {
  primary: 'bg-accent-purple hover:bg-accent-purple/80 text-white border-accent-purple/20',
  secondary: 'bg-dark-surface hover:bg-dark-elevated text-text-primary border-white/10',
  ghost: 'bg-transparent hover:bg-white/5 text-text-primary border-transparent',
  glass: 'glass hover:bg-glass-medium text-text-primary',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  glow = false,
  gradient = false,
  children,
  className,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'relative font-medium rounded-button border transition-all duration-200',
        variantClasses[variant],
        sizeClasses[size],
        glow && 'hover-glow',
        gradient && 'bg-gradient-to-r from-accent-purple to-accent-pink',
        className
      )}
      {...props}
    >
      {gradient && (
        <span className="absolute inset-0 rounded-button bg-gradient-to-r from-accent-purple to-accent-pink opacity-0 hover:opacity-100 transition-opacity duration-200" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}