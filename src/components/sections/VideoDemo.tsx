import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface VideoDemoProps {
  videoId: string
  className?: string
}

export const VideoDemo: React.FC<VideoDemoProps> = ({ videoId, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn('w-full', className)}
      id="video-demo"
    >
      <h3 className="text-2xl font-semibold text-center mb-8">
        <span className="gradient-text">See Systemic in Action</span>
      </h3>

      <div className="glass rounded-xl border border-white/10 p-2 md:p-3">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title="Systemic Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  )
}
