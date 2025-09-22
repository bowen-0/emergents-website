import React from 'react'
import { cn } from '../../lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const sizeClasses = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-[1400px]',
  full: 'max-w-none',
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'lg',
}) => {
  return (
    <div
      className={cn(
        'mx-auto px-6 md:px-8 lg:px-12',
        sizeClasses[size],
        className
      )}
    >
      {children}
    </div>
  )
}