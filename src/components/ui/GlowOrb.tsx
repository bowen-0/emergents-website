import React from 'react'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'

interface GlowOrbProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'purple' | 'pink' | 'blue' | 'cyan'
  animate?: boolean
  className?: string
}

const sizeClasses = {
  sm: 'w-32 h-32',
  md: 'w-64 h-64',
  lg: 'w-96 h-96',
  xl: 'w-[32rem] h-[32rem]',
}

const colorClasses = {
  purple: 'from-accent-purple/30 to-transparent',
  pink: 'from-accent-pink/30 to-transparent',
  blue: 'from-accent-blue/30 to-transparent',
  cyan: 'from-accent-cyan/30 to-transparent',
}

export const GlowOrb: React.FC<GlowOrbProps> = ({
  size = 'md',
  color = 'purple',
  animate = true,
  className,
}) => {
  return (
    <motion.div
      animate={animate ? {
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      } : undefined}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={cn(
        'absolute rounded-full bg-gradient-radial blur-3xl',
        sizeClasses[size],
        `bg-gradient-to-r ${colorClasses[color]}`,
        className
      )}
    />
  )
}