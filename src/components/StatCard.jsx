import { motion } from 'framer-motion'
import { useCounter } from '../hooks/useCounter'
import styles from './StatCard.module.css'

export default function StatCard({ value, label, unit = '', note, accent = false, index = 0 }) {
  const isNumeric = typeof value === 'number'
  const { count, ref } = useCounter(isNumeric ? value : 0)

  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${accent ? styles.accent : ''}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className={styles.value}>
        {isNumeric ? count : value}
        {unit && <span className={styles.unit}>{unit}</span>}
      </div>
      <div className={styles.label}>{label}</div>
      {note && <div className={styles.note}>{note}</div>}
    </motion.div>
  )
}
