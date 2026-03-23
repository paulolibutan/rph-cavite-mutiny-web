import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import styles from './CompareCard.module.css'

export default function CompareCard({ question, truth, spain, index }) {
  const cardRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 180, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 180, damping: 25 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <p className={styles.question}>{question}</p>

      <motion.div
        ref={cardRef}
        className={styles.card}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Truth side */}
        <div className={styles.side}>
          <div className={styles.sideLabel}>
            <span className={styles.sideBadge}>Historical Record</span>
          </div>
          <p className={styles.sideText}>{truth}</p>
        </div>

        {/* Divider */}
        <div className={styles.divider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerVs}>vs</span>
          <span className={styles.dividerLine} />
        </div>

        {/* Spain's claim side */}
        <div className={`${styles.side} ${styles.sideSpain}`}>
          <div className={styles.sideLabel}>
            <span className={`${styles.sideBadge} ${styles.sideBadgeSpain}`}>Spain's Narrative</span>
          </div>
          <p className={`${styles.sideText} ${styles.sideTextSpain}`}>{spain}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
