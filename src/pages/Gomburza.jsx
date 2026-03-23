import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import FlipCard from '../components/FlipCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Gomburza.module.css'

const PRIESTS = [
  {
    name: 'Fr. Mariano Gomez',
    title: 'The Elder Patriarch',
    years: 'Born Aug. 2, 1799 · Age 72 at execution',
    descriptor: '"Quiet strength can shake empires."',
    bio: 'Born in Santa Cruz, Manila, Gomez earned degrees in Canon Law and Sacred Theology from the University of Santo Tomas. For nearly 50 years, he served as parish priest of Bacoor, Cavite — beloved by the community and respected even by Spanish authorities. He co-founded the newspaper La Verdad to advocate for Filipino secular clergy. At 72, he walked to his death with eyes open, blessing the crowd, who knelt as he passed. He had no known connection to the arsenal workers of Fort San Felipe.',
    epitaph: 'He never raised his voice against the Crown. The Crown raised the garrote against him.',
  },
  {
    name: 'Fr. Jose Burgos',
    title: 'The Voice of Reform',
    years: 'Born Feb. 9, 1837 · Age 35 at execution',
    descriptor: '"To write truth is to resist tyranny."',
    bio: 'Born in Vigan, Ilocos Sur, to a Spanish officer father and Filipino mestiza mother, Burgos was the most brilliant and most feared of the three. He earned five degrees from the University of Santo Tomas, including two doctorates. His 1864 "Manifesto to the Noble Spanish People" (Manifesto a la Noble Nación Española) directly challenged the friar monopoly over Philippine parishes — and made him Spain\'s most wanted reformist. Jose Rizal\'s brother Paciano lived with Burgos as his personal assistant. Burgos was the real target. The others were swept in to make the "conspiracy" believable.',
    epitaph: 'Spain silenced his pen. It could not silence his legacy.',
  },
  {
    name: 'Fr. Jacinto Zamora',
    title: 'The Gentle Musician',
    years: 'Born Aug. 14, 1835 · Age 37 at execution',
    descriptor: '"Innocence is no shield against empire."',
    bio: 'Born in Pandacan, Manila, Zamora was the most parish-active of the three — he served at least eight parishes including Mariquina, Pasig, and Makati. He was known as a musician and a gentle priest, the least politically vocal of the group. His inclusion in the "conspiracy" was the clearest proof that the charges were fabricated. After hearing his death sentence, Zamora suffered a complete mental breakdown in prison. The serene calm witnesses observed at his execution was not courage — it was the blankness of psychological collapse. He gave no last words.',
    epitaph: 'He composed music in a colony that would not let him compose his own fate.',
  },
]

// Full corrected dedication — February 17 and corrected ages
const DEDICATION = `"To the memory of the priests Don Mariano Gomez (72 years old), Don José Burgos (35 years old), and Don Jacinto Zamora (37 years old). Executed in Bagumbayan Field on the 17th of February, 1872.

The Church, by refusing to degrade you, has placed in doubt the crime that has been imputed to you; the Government, by surrounding your trials with mystery and shadows, causes the belief that there was some error, committed in fatal moments; and all the Philippines, by worshiping your memory and calling you martyrs, in no sense recognizes your culpability."`

export default function Gomburza() {
  const quoteRef = useRef(null)
  const quoteInView = useInView(quoteRef, { once: true, amount: 0.4 })

  return (
    <section id="gomburza" className={`page-section ${styles.section}`}>
      <div className={`section-container ${styles.inner}`}>
        {/* Header */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className={`eyebrow ${styles.eyebrow}`}>February 17, 1872 · Bagumbayan Field, Manila</span>
          <h2 className={`section-title ${styles.title}`}>GOMBURZA</h2>
          <p className={`section-subtitle ${styles.subtitle}`}>
            Three priests. No credible evidence. One execution that would haunt an empire —
            and inspire a revolution.
          </p>
        </motion.header>

        {/* Flip cards */}
        <div className={styles.cardsGrid}>
          {PRIESTS.map((priest, i) => (
            <FlipCard key={i} priest={priest} index={i} />
          ))}
        </div>

        {/* Bagumbayan execution illustration */}
        <motion.div
          className={styles.executionIllustration}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <ImagePlaceholder
            label="Execution of GOMBURZA at Bagumbayan Field, February 17, 1872"
            source="Wikimedia Commons / La Ilustración Española y Americana, 1872"
            aspectRatio="16 / 7"
            size="full"
            caption="An estimated 40,000 Filipinos witnessed the garrote executions. Edmond Plauchut's eyewitness account, published in La Solidaridad in 1892, remains the primary record."
          />
        </motion.div>

        {/* Paciano connection callout */}
        <motion.div
          className={styles.pacianoBanner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
        >
          <span className={styles.pacianoIcon} aria-hidden="true">🔗</span>
          <div>
            <p className={styles.pacianoTitle}>The Rizal–Burgos Connection</p>
            <p className={styles.pacianoText}>
              Jose Rizal's older brother <strong>Paciano Rizal</strong> lived with and
              personally assisted Father Burgos in Manila. After the GOMBURZA execution,
              Paciano's known connection to Burgos made the entire Rizal family a target
              of Spanish suspicion. Paciano advised Jose to enroll using his second surname
              "Rizal" instead of "Mercado" — specifically to protect him from scrutiny.
              Paciano then funded Jose's studies in Europe, and the story of GOMBURZA's
              martyrdom, transmitted through correspondence, became a defining influence
              on everything Rizal would write and do.
            </p>
          </div>
        </motion.div>

        {/* Execution context */}
        <motion.div
          className={styles.executionBanner}
          initial={{ opacity: 0, scaleX: 0.95 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.executionDate}>
            <span className={styles.execDateDay}>17</span>
            <span className={styles.execDateMonth}>February</span>
            <span className={styles.execDateYear}>1872</span>
          </div>
          <div className={styles.executionInfo}>
            <h3 className={styles.executionTitle}>Death by Garrote Vil at Bagumbayan</h3>
            <p className={styles.executionDesc}>
              Before an estimated <strong>40,000 witnesses</strong> at Bagumbayan Field
              (now Rizal Park, Manila), three priests were executed by the{' '}
              <strong>garrote vil</strong> — a device that secured the condemned to a chair
              and tightened a metal collar around the neck until death. An eyewitness account
              by French writer <strong>Edmond Plauchut</strong>, published in{' '}
              <em>La Solidaridad</em> in 1892, recorded their final moments: Gomez blessed
              the crowd with his head held high; Burgos cried out "What crime have I committed
              to deserve such a death?" before being restrained; and Zamora, who had suffered
              a mental breakdown upon hearing his sentence, appeared outwardly calm in a state
              of psychological dissociation.
            </p>
            <p className={`${styles.executionDesc} ${styles.executionNote}`}>
              <strong>Note:</strong> Rizal's dedication in El Filibusterismo states the
              execution was on February 28 — this is Rizal's own error. Primary sources
              and all major historians confirm <strong>February 17, 1872</strong>.
            </p>
          </div>
        </motion.div>

        {/* Rizal's dedication */}
        <div className={styles.dedicationSection}>
          <motion.p
            className={styles.dedicationLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Jose Rizal's Dedication — El Filibusterismo (1891)
          </motion.p>

          <div ref={quoteRef} className={styles.dedicationCard}>
            <motion.p
              className={styles.dedicationText}
              initial={{ opacity: 0 }}
              animate={quoteInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.1 }}
            >
              {quoteInView && <TypewriterText text={DEDICATION} />}
            </motion.p>
            <p className={styles.dedicationAttrib}>— Jose Rizal, Ghent, Belgium, 1891</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TypewriterText({ text }) {
  const chars = text.split('')
  return (
    <>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01, delay: i * 0.016 }}
        >
          {char}
        </motion.span>
      ))}
    </>
  )
}
