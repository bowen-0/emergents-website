import React from 'react'
import { motion } from 'framer-motion'

export const SystemMapDemo: React.FC = () => {
  const nodes = [
    { id: 1, x: 60, y: 25, label: 'Student Achievement' },
    { id: 2, x: 25, y: 20, label: 'Teacher Quality' },
    { id: 3, x: 85, y: 15, label: 'School Resources' },
    { id: 4, x: 12, y: 45, label: 'Parent Engagement' },
    { id: 5, x: 92, y: 55, label: 'Community Support' },
    { id: 6, x: 55, y: 75, label: 'Public Funding' },
    { id: 7, x: 35, y: 50, label: 'Learning Environment' },
    { id: 8, x: 75, y: 45, label: 'Infrastructure' },
  ]

  const connections = [
    // To Student Achievement (central top)
    { from: 2, to: 1, strength: 'strong' },
    { from: 3, to: 1, strength: 'strong' },
    { from: 7, to: 1, strength: 'medium' },

    // Teacher Quality connections
    { from: 4, to: 2, strength: 'medium' },

    // School Resources connections
    { from: 8, to: 3, strength: 'strong' },
    { from: 5, to: 3, strength: 'weak' },

    // Public Funding as central bottom hub
    { from: 6, to: 2, strength: 'strong' },
    { from: 6, to: 8, strength: 'strong' },
    { from: 6, to: 7, strength: 'medium' },

    // Learning Environment
    { from: 4, to: 7, strength: 'medium' },

    // Infrastructure
    { from: 5, to: 8, strength: 'medium' },
  ]

  return (
    <div className="relative w-full aspect-[16/9] glass rounded-xl border border-white/10 p-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      {/* SVG Container */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Define gradients */}
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ba9cff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e59cff" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ba9cff" />
            <stop offset="100%" stopColor="#e59cff" />
          </linearGradient>
        </defs>

        {/* Render Connections */}
        <g>
          {connections.map((connection, index) => {
            const fromNode = nodes.find(n => n.id === connection.from)
            const toNode = nodes.find(n => n.id === connection.to)
            if (!fromNode || !toNode) return null

            // Vary line opacity based on connection strength
            const opacity = connection.strength === 'strong' ? 0.6 :
                          connection.strength === 'medium' ? 0.4 : 0.3

            return (
              <motion.line
                key={`connection-${index}`}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="url(#connectionGradient)"
                strokeWidth={connection.strength === 'strong' ? "0.6" : "0.4"}
                strokeOpacity={opacity}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: opacity }}
                transition={{
                  duration: 1.5,
                  delay: 0.5 + index * 0.1,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </g>

        {/* Render Nodes */}
        <g>
          {nodes.map((node, index) => (
            <motion.g
              key={node.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 200,
              }}
            >
              {/* Node Glow */}
              <circle
                cx={node.x}
                cy={node.y}
                r="8"
                fill="url(#nodeGradient)"
                fillOpacity="0.1"
              />

              {/* Node Circle */}
              <circle
                cx={node.x}
                cy={node.y}
                r="3"
                fill="url(#nodeGradient)"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.5"
              />

              {/* Node Label */}
              <motion.text
                x={node.x}
                y={node.y - 5}
                textAnchor="middle"
                className="text-[3px] fill-white/80 select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {node.label}
              </motion.text>
            </motion.g>
          ))}
        </g>

        {/* Animated Pulse Effect */}
        {nodes.map((node) => (
          <motion.circle
            key={`pulse-${node.id}`}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="none"
            stroke="url(#nodeGradient)"
            strokeWidth="0.5"
            strokeOpacity="0"
            initial={{ r: 3, strokeOpacity: 0 }}
            animate={{
              r: [3, 8, 3],
              strokeOpacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.id * 0.5,
              ease: 'easeOut',
            }}
          />
        ))}
      </svg>

      {/* Example Prompt Overlay - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute top-2 left-2 md:top-3 md:left-3"
      >
        <div className="glass rounded-lg px-2 py-1 md:px-3 md:py-1.5 border border-accent-purple/20">
          <p className="text-[10px] md:text-xs text-text-secondary">
            <span className="text-accent-purple font-medium">Prompt:</span> "Show factors influencing student achievement"
          </p>
        </div>
      </motion.div>
    </div>
  )
}