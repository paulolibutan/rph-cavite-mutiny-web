import { useScroll, useSpring, motion } from 'framer-motion'
import styles from './ScrollProgress.module.css'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      className={styles.bar}
      style={{ scaleX, transformOrigin: 'left' }}
      aria-hidden="true"
    />
  )
}
