import React, { useState, useEffect } from 'react'
import { cn } from '../../lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './Button'

interface NavItem {
  label: string
  href: string
  external?: boolean
}

interface NavigationProps {
  items: NavItem[]
  logo?: React.ReactNode
  className?: string
  sticky?: boolean
}

export const Navigation: React.FC<NavigationProps> = ({
  items,
  logo,
  className,
  sticky = true,
}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!sticky) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sticky])

  return (
    <>
      <nav
        className={cn(
          'w-full z-50 transition-all duration-200',
          sticky && 'fixed top-0 left-0 right-0',
          isScrolled && sticky && 'glass-heavy',
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              {logo || (
                <span className="text-2xl font-bold gradient-text">Logo</span>
              )}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {items.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="glass" size="sm" glow>
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-6 h-6 flex flex-col justify-center"
            >
              <span className={cn(
                'absolute w-full h-0.5 bg-text-primary transform transition-all duration-200',
                isMobileMenuOpen ? 'rotate-45' : '-translate-y-2'
              )} />
              <span className={cn(
                'absolute w-full h-0.5 bg-text-primary transition-all duration-200',
                isMobileMenuOpen && 'opacity-0'
              )} />
              <span className={cn(
                'absolute w-full h-0.5 bg-text-primary transform transition-all duration-200',
                isMobileMenuOpen ? '-rotate-45' : 'translate-y-2'
              )} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              'md:hidden fixed z-40 w-full glass-heavy',
              sticky ? 'top-16' : 'relative'
            )}
          >
            <div className="px-6 py-4 space-y-3">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="block py-2 text-text-secondary hover:text-text-primary transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3">
                <Button variant="glass" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}