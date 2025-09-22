import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '../../lib/utils'

interface EmailCaptureProps {
  className?: string
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({ className }) => {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

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

    // Simulate API call - replace with actual backend later
    setTimeout(() => {
      // Store in localStorage for now
      const existingEmails = JSON.parse(localStorage.getItem('systemic_waitlist') || '[]')
      if (!existingEmails.includes(email)) {
        existingEmails.push(email)
        localStorage.setItem('systemic_waitlist', JSON.stringify(existingEmails))
      }

      setIsSubmitted(true)
      setIsLoading(false)
    }, 1000)
  }

  const handleReset = () => {
    setEmail('')
    setIsSubmitted(false)
    setError('')
  }

  return (
    <div className={cn('w-full', className)}>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold mb-2">Join the Waitlist</h3>
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
                  'w-full px-4 py-3 rounded-lg glass border transition-all duration-200',
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

            <p className="text-xs text-center text-text-muted">
              We'll only use your email to notify you about the launch
            </p>
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
  )
}