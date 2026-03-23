import { motion } from 'framer-motion'
import styles from './RippleDiagram.module.css'

const RINGS = [
  { label: 'El Filibusterismo', sublabel: '1891', r: 0, color: '#D4A017', delay: 0, center: true },
  { label: 'Filipino Ilustrado', sublabel: 'Nationalist awakening', r: 90, color: '#D4A017', delay: 0.3 },
  { label: 'Propaganda Movement', sublabel: 'Reform, then revolution', r: 160, color: '#B88A12', delay: 0.6 },
  { label: 'Katipunan', sublabel: 'Founded 1892', r: 230, color: '#8B6914', delay: 0.9 },
  { label: '1896 Revolution', sublabel: 'Cry of Pugad Lawin', r: 300, color: '#8B1A1A', delay: 1.2 },
]

export default function RippleDiagram() {
  const size = 640
  const cx = size / 2

  return (
    <div className={styles.wrapper}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className={styles.svg}
        aria-label="Ripple diagram showing El Filibusterismo's influence spreading outward to the 1896 Revolution"
        role="img"
      >
        {/* Animated rings */}
        {RINGS.slice(1).map((ring, i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cx}
            r={ring.r}
            fill="none"
            stroke={ring.color}
            strokeWidth="1.5"
            strokeDasharray="6 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.45 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: ring.delay, ease: 'easeOut' }}
          />
        ))}

        {/* Pulse rings (decorative) */}
        {[1, 2, 3].map(i => (
          <motion.circle
            key={`pulse-${i}`}
            cx={cx}
            cy={cx}
            r={40}
            fill="none"
            stroke="rgba(212,160,23,0.15)"
            strokeWidth="1"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2.5 + i * 0.8, opacity: 0 }}
            transition={{ duration: 2.5, delay: i * 0.7, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}

        {/* Center node */}
        <motion.circle
          cx={cx}
          cy={cx}
          r={50}
          fill="rgba(212,160,23,0.12)"
          stroke="#D4A017"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        />

        {/* Ring labels */}
        {RINGS.map((ring, i) => {
          const angle = -Math.PI / 4 // position labels at upper-right
          const lx = ring.center ? cx : cx + ring.r * Math.cos(angle)
          const ly = ring.center ? cx : cx + ring.r * Math.sin(angle)

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: ring.delay + 0.5 }}
            >
              {ring.center ? (
                <>
                  <text x={cx} y={cx - 8} textAnchor="middle" className={styles.centerLabel}>
                    {ring.label}
                  </text>
                  <text x={cx} y={cx + 12} textAnchor="middle" className={styles.centerSub}>
                    {ring.sublabel}
                  </text>
                </>
              ) : (
                <foreignObject
                  x={lx - 70}
                  y={ly - 28}
                  width="140"
                  height="56"
                >
                  <div className={styles.ringLabel}>
                    <span className={styles.ringLabelTitle} style={{ color: ring.color }}>
                      {ring.label}
                    </span>
                    <span className={styles.ringLabelSub} style={{ fontSize: '11px' }}>{ring.sublabel}</span>
                  </div>
                </foreignObject>
              )}
            </motion.g>
          )
        })}
      </svg>
    </div>
  )
}
