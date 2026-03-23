import { motion } from 'framer-motion'
import styles from './SectionWrapper.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function SectionWrapper({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  light = false,
  centered = false,
}) {
  return (
    <section id={id} className={`page-section ${styles.section} ${light ? styles.light : ''} ${className}`}>
      <div className={`section-container ${styles.inner} ${centered ? styles.centered : ''}`}>
        {(eyebrow || title || subtitle) && (
          <motion.header
            className={styles.header}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {eyebrow && (
              <motion.span className={`eyebrow ${styles.eyebrow}`} variants={fadeUp}>
                {eyebrow}
              </motion.span>
            )}
            {title && (
              <motion.h2 className={`section-title ${styles.title} ${light ? styles.titleDark : ''}`} variants={fadeUp}>
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p className={`section-subtitle ${styles.subtitle} ${light ? styles.subtitleDark : ''}`} variants={fadeUp}>
                {subtitle}
              </motion.p>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  )
}
