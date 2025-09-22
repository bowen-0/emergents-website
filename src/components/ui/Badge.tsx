import React from 'react'
import { cn } from '../../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'gradient' | 'outline' | 'glass'
  size?: 'sm' | 'md'
  className?: string
}

const variantClasses = {
  default: 'bg-accent-purple/20 text-accent-purple border-accent-purple/30',
  gradient: 'bg-gradient-to-r from-accent-purple to-accent-pink text-white',
  outline: 'bg-transparent border-accent-purple/50 text-accent-purple',
  glass: 'glass text-text-primary',
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className,
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full border',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      {children}
    </span>
  )
}