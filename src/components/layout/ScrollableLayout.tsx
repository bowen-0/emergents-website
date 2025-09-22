import React from 'react'
import { cn } from '../../lib/utils'
import { GlowOrb } from '../ui/GlowOrb'

interface ScrollableLayoutProps {
  children: React.ReactNode
  className?: string
}

export const ScrollableLayout: React.FC<ScrollableLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(
      'relative min-h-screen bg-dark-primary',
      className
    )}>
      {/* Background Effects - Fixed Position */}
      <div className="fixed inset-0 -z-10">
        <GlowOrb size="lg" color="purple" className="top-10 -left-32 opacity-30" />
        <GlowOrb size="lg" color="pink" className="bottom-10 -right-32 opacity-30" />
        <GlowOrb size="md" color="cyan" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" animate />
      </div>

      {/* Grid Background - Fixed Position */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Content Container - Scrollable */}
      <div className="relative z-10 flex flex-col justify-start items-center px-6 pt-8 md:pt-12 pb-8">
        {children}
      </div>
    </div>
  )
}