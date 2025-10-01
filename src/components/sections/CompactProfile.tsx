import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'

interface CompactProfileProps {
  name: string
  imageUrl?: string
  className?: string
}

export const CompactProfile: React.FC<CompactProfileProps> = ({
  name,
  imageUrl,
  className,
}) => {
  return (
    <div className={cn('text-center', className)}>
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <div className="relative inline-block">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-accent-purple/20"
            />
          ) : (
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center">
              <span className="text-4xl md:text-5xl font-bold text-white">
                {name.charAt(0)}
              </span>
            </div>
          )}
          {/* Subtle glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 blur-xl -z-10" />
        </div>
      </motion.div>

      {/* Name with wave */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        <span className="text-text-secondary">Hi,</span>{' '}
        <span className="gradient-text">I'm {name}</span>
        <motion.span
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-block ml-2"
        >
          👋
        </motion.span>
      </motion.h1>

      {/* Tagline - with colon */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-4"
      >
        I'm building <span className="gradient-text">AI applications</span> that transform our ways of working:
      </motion.p>
    </div>
  )
}