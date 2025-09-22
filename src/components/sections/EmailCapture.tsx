import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/utils'

interface EmailCaptureProps {
  className?: string
  variant?: 'default' | 'highlighted' | 'gradient' | 'floating' | 'banner'
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({ className, variant = 'default' }) => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [wantsUpdates, setWantsUpdates] = useState(true)

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email')
      return
    }

    setIsLoading(true)

    try {
      // Send to Google Sheets via Apps Script using FormData to avoid CORS preflight
      const formData = new FormData()
      formData.append('email', email)
      formData.append('wantsUpdates', wantsUpdates.toString())

      const response = await fetch('https://script.google.com/macros/s/AKfycbx0wRvR92b_BI1-VUYNaM74cXdHGBzFgrQgwdhhnVK52WZzxvrgTqgWFT9itmtfEoSi/exec', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)

        // Also store in localStorage as backup
        const existingEmails = JSON.parse(localStorage.getItem('systemic_waitlist') || '[]')
        if (!existingEmails.find((entry: any) => entry.email === email)) {
          const emailData = { email, wantsUpdates, timestamp: Date.now() }
          existingEmails.push(emailData)
          localStorage.setItem('systemic_waitlist', JSON.stringify(existingEmails))
        }
      } else {
        setError('Something went wrong. Please try again.')
        console.error('Submission error:', result.error)
      }
    } catch (error) {
      console.error('Network error:', error)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setEmail('')
    setIsSubmitted(false)
    setError('')
  }

  const getWrapperClasses = () => {
    const base = 'w-full'

    switch (variant) {
      case 'highlighted':
        return cn(base, 'p-8 rounded-2xl glass-heavy border-2 border-accent-purple/40 relative overflow-hidden shadow-lg shadow-accent-purple/10')
      case 'gradient':
        return cn(base, 'p-8 rounded-2xl bg-gradient-to-br from-accent-purple/15 via-accent-pink/8 to-accent-blue/10 backdrop-blur-md border border-white/30')
      case 'floating':
        return cn(base, 'p-12 rounded-2xl glass border-2 border-white/30 shadow-2xl shadow-accent-purple/20 relative')
      case 'banner':
        return cn(base, 'py-12 px-8 rounded-3xl bg-gradient-to-r from-accent-purple/10 via-accent-pink/5 to-accent-blue/10 border-2 border-gradient-to-r from-accent-purple/30 to-accent-pink/30')
      default:
        return base
    }
  }

  const getTitleClasses = () => {
    return variant === 'gradient' || variant === 'banner' ? 'gradient-text' : ''
  }

  return (
    <div className={cn(getWrapperClasses(), className)}>
      {/* Variant-specific background effects */}
      {variant === 'highlighted' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/8 to-accent-pink/8 animate-pulse" />
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-accent-purple rounded-full animate-ping" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-accent-pink rounded-full animate-ping [animation-delay:1s]" />
        </>
      )}

      {variant === 'floating' && (
        <>
          <div className="absolute -top-1 -left-1 w-20 h-20 bg-accent-purple/20 rounded-full blur-xl" />
          <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-accent-pink/20 rounded-full blur-xl" />
        </>
      )}

      {variant === 'banner' && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 left-4 w-32 h-32 bg-accent-purple rounded-full blur-3xl" />
          <div className="absolute bottom-4 right-4 w-32 h-32 bg-accent-pink rounded-full blur-3xl" />
        </div>
      )}

      <div className={variant !== 'default' ? 'relative z-10' : ''}>
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className={cn('text-xl font-semibold mb-2', getTitleClasses())}>
                  Join the Waitlist
                </h3>
                <p className="text-sm text-text-secondary">
                  Be the first to know when Systemic launches on Miro Marketplace
                </p>
              </div>

            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder="Enter your email"
                className={cn(
                  'w-full pl-12 pr-4 py-3 rounded-lg glass border transition-all duration-200',
                  'placeholder:text-text-muted focus:outline-none',
                  error
                    ? 'border-red-500/50 focus:border-red-500'
                    : 'border-white/10 focus:border-accent-purple/50'
                )}
                disabled={isLoading}
              />

              {/* Email Icon */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-sm text-red-400"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="updates-checkbox"
                checked={wantsUpdates}
                onChange={(e) => setWantsUpdates(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border border-white/20 bg-transparent checked:bg-accent-purple checked:border-accent-purple focus:outline-none focus:ring-2 focus:ring-accent-purple/50"
              />
              <label htmlFor="updates-checkbox" className="text-sm text-text-secondary cursor-pointer">
                Notify me about updates and new features. (Don't worry, I won't spam you.)
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                'w-full py-3 rounded-lg font-medium transition-all duration-200',
                'bg-gradient-to-r from-accent-purple to-accent-pink',
                'hover:shadow-lg hover:shadow-accent-purple/25',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'relative overflow-hidden group'
              )}
            >
              <span className="relative z-10">
                {isLoading ? 'Joining...' : 'Join Waitlist'}
              </span>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center space-y-4 py-8"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20"
            >
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </motion.div>

            <div>
              <h3 className="text-xl font-semibold mb-2">You're on the list!</h3>
              <p className="text-sm text-text-secondary mb-4">
                We'll notify you at <span className="text-accent-purple">{email}</span> when Systemic launches.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="text-sm text-text-secondary hover:text-accent-purple transition-colors"
            >
              Add another email
            </button>
          </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}