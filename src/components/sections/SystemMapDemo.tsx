import React from 'react'
import { motion } from 'framer-motion'

export const SystemMapDemo: React.FC = () => {
  const nodes = [
    { id: 1, x: 50, y: 20, label: 'Student Achievement' },
    { id: 2, x: 20, y: 50, label: 'Teacher Quality' },
    { id: 3, x: 80, y: 50, label: 'School Resources' },
    { id: 4, x: 30, y: 80, label: 'Parent Engagement' },
    { id: 5, x: 70, y: 80, label: 'Community Support' },
    { id: 6, x: 50, y: 60, label: 'Public Funding' },
  ]

  const connections = [
    { from: 2, to: 1 },
    { from: 3, to: 1 },
    { from: 4, to: 1 },
    { from: 5, to: 1 },
    { from: 6, to: 2 },
    { from: 6, to: 3 },
    { from: 5, to: 4 },
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

            return (
              <motion.line
                key={`connection-${index}`}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="url(#connectionGradient)"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.5 + index * 0.1,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </g>

        {/* Render Arrows */}
        <g>
          {connections.map((connection, index) => {
            const fromNode = nodes.find(n => n.id === connection.from)
            const toNode = nodes.find(n => n.id === connection.to)
            if (!fromNode || !toNode) return null

            // Calculate arrow position (midpoint)
            const midX = (fromNode.x + toNode.x) / 2
            const midY = (fromNode.y + toNode.y) / 2

            // Calculate arrow angle
            const angle = Math.atan2(toNode.y - fromNode.y, toNode.x - fromNode.x) * 180 / Math.PI

            return (
              <motion.g
                key={`arrow-${index}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 1.5 + index * 0.1,
                }}
              >
                <polygon
                  points={`${midX},${midY - 1} ${midX - 1.5},${midY + 1} ${midX + 1.5},${midY + 1}`}
                  fill="url(#nodeGradient)"
                  fillOpacity="0.6"
                  transform={`rotate(${angle} ${midX} ${midY})`}
                />
              </motion.g>
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

      {/* Example Prompt Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-4 right-4"
      >
        <div className="glass rounded-lg px-3 py-2 border border-white/10">
          <p className="text-xs text-text-secondary">
            <span className="text-accent-purple">Example:</span> "Show me the factors influencing student achievement"
          </p>
        </div>
      </motion.div>
    </div>
  )
}