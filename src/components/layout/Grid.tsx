import React from 'react'
import { cn } from '../../lib/utils'

interface GridProps {
  children: React.ReactNode
  className?: string
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 12
  gap?: 'sm' | 'md' | 'lg' | 'xl'
  responsive?: boolean
}

const colClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
  6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
  12: 'grid-cols-12',
}

const gapClasses = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
  xl: 'gap-12',
}

export const Grid: React.FC<GridProps> = ({
  children,
  className,
  cols = 3,
  gap = 'md',
  responsive = true,
}) => {
  return (
    <div
      className={cn(
        'grid',
        responsive ? colClasses[cols] : `grid-cols-${cols}`,
        gapClasses[gap],
        className
      )}
    >
      {children}
    </div>
  )
}