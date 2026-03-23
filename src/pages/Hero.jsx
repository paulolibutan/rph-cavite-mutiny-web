import { motion } from 'framer-motion'
import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Hero.module.css'

const PARTICLES = Array.from({ length: 8 }, (_, i) => i)

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
}

export default function Hero({ reduceMotion }) {
  const scrollToMutiny = (e) => {
    e.preventDefault()
    document.getElementById('mutiny')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className={styles.hero} aria-label="Introduction">
      {/* Atmospheric background layers */}
      <div className={styles.bgGrain} aria-hidden="true" />
      <div className={styles.bgVignette} aria-hidden="true" />
      <div className={styles.bgGlow} aria-hidden="true" />

      {/* Watermark year */}
      <span className={styles.watermark} aria-hidden="true">1872</span>

      {/* Smoke particles */}
      {!reduceMotion && (
        <div className={styles.particles} aria-hidden="true">
          {PARTICLES.map(i => (
            <span key={i} className={styles.particle} style={{ '--i': i }} />
          ))}
        </div>
      )}

      {/* Main content */}
      <motion.div
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className={`eyebrow ${styles.eyebrow}`} variants={itemVariants}>
          Cavite, Philippines &nbsp;·&nbsp; January 20, 1872
        </motion.span>

        <motion.h1 className={styles.headline} variants={itemVariants}>
          The Night That<br />
          <em>Changed Everything</em>
        </motion.h1>

        <motion.p className={styles.subline} variants={itemVariants}>
          200 workers. One night. A lie that lit the revolution.
        </motion.p>

        <motion.p className={styles.hook} variants={itemVariants}>
          On payday, January 20, 1872, workers at the Cavite naval arsenal
          opened their pay envelopes and found money missing. Spain had
          abolished their rights to exemption from forced labor — without
          warning, without compensation. What followed was a two-day
          uprising, quickly crushed. What Spain did next — executing three
          innocent priests and calling it a nationwide conspiracy — changed
          the course of Philippine history forever.
        </motion.p>

        <motion.div className={styles.actions} variants={itemVariants}>
          <a href="#mutiny" className={styles.cta} onClick={scrollToMutiny}>
            Uncover the Truth
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </motion.div>

        {/* Historical map inset — inside the content column so it stays centred */}
        <motion.div className={styles.mapInset} variants={itemVariants}>
          <ImagePlaceholder
            label="Map of Manila Bay & Cavite Arsenal, c. 1872"
            source="Wikimedia Commons / Philippine National Archives"
            aspectRatio="16 / 7"
            size="full"
            caption="Fort San Felipe sat at the tip of the Cavite peninsula — 30 km from Manila, isolated enough that the expected uprising across the bay never came."
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </div>
    </section>
  )
}
