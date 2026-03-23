import { motion } from 'framer-motion'
import styles from './ChainDiagram.module.css'

const NODES = [
  {
    id: 'labor',
    label: 'Labor Grievance',
    detail: 'Abolition of polo y servicios exemptions for Cavite arsenal workers.',
    year: '1868–72',
    color: 'var(--color-parchment-dk)',
    textColor: 'var(--color-ink)',
    pulse: false,
  },
  {
    id: 'mutiny',
    label: 'Cavite Mutiny',
    detail: '200 workers seize Fort San Felipe. Suppressed in one night.',
    year: 'Jan 20, 1872',
    color: 'var(--color-gold-deep)',
    textColor: 'var(--color-ink)',
    pulse: false,
  },
  {
    id: 'gomburza',
    label: 'Execution of GOMBURZA',
    detail: 'Three priests garroted at Bagumbayan on fabricated charges.',
    year: 'Feb 17, 1872',
    color: 'var(--color-crimson)',
    textColor: 'var(--color-parchment)',
    pulse: false,
  },
  {
    id: 'elfili',
    label: 'El Filibusterismo',
    detail: "Rizal's novel, dedicated to GOMBURZA, ignites Filipino nationalist consciousness.",
    year: '1891',
    color: 'var(--color-gold-bright)',
    textColor: 'var(--color-ink)',
    pulse: false,
  },
  {
    id: 'revolution',
    label: 'Philippine Revolution',
    detail: 'Katipunan launches armed revolution. The Cry of Pugad Lawin.',
    year: '1896',
    color: '#c0392b',
    textColor: '#fff',
    pulse: true,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.22, delayChildren: 0.2 } },
}

const nodeVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.34, 1.3, 0.64, 1] } },
}

const linkVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
}

export default function ChainDiagram() {
  return (
    <motion.div
      className={styles.chain}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      role="list"
      aria-label="Chain of events from the Cavite Mutiny to the Philippine Revolution"
    >
      {NODES.map((node, i) => (
        <div key={node.id} className={styles.nodeGroup} role="listitem">
          {/* Node */}
          <motion.div
            className={`${styles.node} ${node.pulse ? styles.nodePulse : ''}`}
            variants={nodeVariants}
            style={{ background: node.color, color: node.textColor }}
          >
            <span className={styles.nodeYear}>{node.year}</span>
            <span className={styles.nodeLabel}>{node.label}</span>
            <span className={styles.nodeDetail}>{node.detail}</span>
          </motion.div>

          {/* Connector (not after last) */}
          {i < NODES.length - 1 && (
            <motion.div className={styles.connector} variants={nodeVariants}>
              <svg className={styles.connectorSvg} viewBox="0 0 60 24" fill="none" aria-hidden="true">
                {/* Chain link shape */}
                <motion.path
                  d="M2 12 C2 12 8 6 14 12 C20 18 26 12 26 12"
                  stroke="rgba(212,160,23,0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  variants={linkVariants}
                />
                <motion.path
                  d="M34 12 C34 12 40 6 46 12 C52 18 58 12 58 12"
                  stroke="rgba(212,160,23,0.5)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                  variants={linkVariants}
                />
                <motion.line
                  x1="26" y1="12" x2="34" y2="12"
                  stroke="rgba(212,160,23,0.3)"
                  strokeWidth="1.5"
                  variants={linkVariants}
                />
              </svg>
              <svg className={styles.arrowSvg} viewBox="0 0 16 24" fill="none" aria-hidden="true">
                <motion.path
                  d="M8 2 L8 18 M3 13 L8 20 L13 13"
                  stroke="rgba(212,160,23,0.45)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={linkVariants}
                />
              </svg>
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  )
}
