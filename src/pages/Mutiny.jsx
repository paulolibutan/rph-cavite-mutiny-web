import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import StatCard from '../components/StatCard'
import Timeline from '../components/Timeline'
import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Mutiny.module.css'

const STATS = [
  {
    value: 200,
    label: 'Workers & Soldiers Who Participated',
    note: 'Local fort workers — not a nationwide rebel network',
    index: 0,
  },
  {
    value: '2',
    label: 'Days — Total Duration of the Mutiny',
    unit: ' days',
    note: 'January 20–22, 1872. Suppressed in under 48 hours.',
    index: 1,
  },
  {
    value: 0,
    label: 'Credible Evidence Linking GOMBURZA to the Mutiny',
    note: 'Sole witness: bribed, promised pardon, then executed. Trial records: vanished. Schumacher (2011): GOMBURZA were innocent.',
    accent: true,
    index: 2,
  },
  {
    value: 3,
    label: 'Priests Executed as "Masterminds"',
    note: 'GOMBURZA — with no verified link to Fort San Felipe',
    accent: true,
    index: 3,
  },
]

export default function Mutiny() {
  return (
    <SectionWrapper
      id="mutiny"
      eyebrow="January 20–22, 1872 — Fort San Felipe, Cavite"
      title="What Really Happened"
      subtitle="Long before Spain rewrote the story, there were simply workers who had lost their rights. Let's look at the facts."
    >
      {/* Stat grid */}
      <motion.div
        className={styles.statsGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {STATS.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </motion.div>

      {/* Trigger explainer */}
      <motion.div
        className={styles.triggerBox}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65 }}
      >
        <p className={styles.triggerLabel}>The Spark That Started It All</p>
        <p className={styles.triggerText}>
          On <strong>payday — January 20, 1872</strong> — workers at the Cavite naval arsenal
          opened their envelopes and found money missing. Governor-General Rafael de Izquierdo
          had just abolished two privileges they had held for generations:{' '}
          <strong>exemption from polo y servicios</strong>{' '}
          (the 40-day annual forced labor required of all Filipino men) and{' '}
          <strong>exemption from the annual tribute tax</strong>.
          The deductions had been taken without warning. Workers who had served the Spanish
          navy loyally for years were suddenly treated as common laborers with no rights.
        </p>
        <p className={styles.triggerText}>
          That night, Sergeant <strong>Fernando La Madrid</strong> — a mestizo from Bicol
          stationed at the arsenal — led roughly 200 soldiers and workers in seizing Fort San
          Felipe. They fired signal cannons into the air, expecting a coordinated uprising
          across Manila to respond. It never came. What they had mistaken for the pre-arranged
          signal rockets were actually{' '}
          <strong>fireworks from a feast day celebration in Sampaloc, Manila</strong>.
        </p>
        <p className={styles.triggerText}>
          By <strong>January 22</strong>, Spanish forces under General Felipe Ginovés had
          retaken the fort. 41 soldiers died in the assault. 13 mutineers were executed on
          January 27. The mutiny — from beginning to end — lasted less than 48 hours.
        </p>
      </motion.div>

      {/* Fort San Felipe illustration */}
      <motion.div
        className={styles.fortPlaceholder}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65 }}
      >
        <figure className={styles.fortFigure}>
          <img
            src="/images/fort-san-felipe.jpg"
            alt="Fort San Felipe and the Cavite Arsenal, 1872"
            className={styles.fortImg}
          />
          <figcaption className={styles.fortCaption}>
            The arsenal sat at the peninsula's tip — the site where 200 workers and soldiers
            seized Fort San Felipe on the night of January 20, 1872.
          </figcaption>
        </figure>
      </motion.div>

      {/* Balance scale */}
      <motion.div
        className={styles.scaleSection}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p className={styles.scaleLabel}>The Weight of Historical Evidence</p>
        <BalanceScale />
      </motion.div>

      {/* Timeline */}
      <div className={styles.timelineSection}>
        <motion.h3
          className={styles.timelineHeading}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          The Timeline of Events
        </motion.h3>
        <Timeline />
      </div>

      {/* Historian note */}
      <motion.aside
        className={styles.historianNote}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.historianNoteLabel}>A Note on Terminology</span>
        <p>
          Filipino historians like Agoncillo tend to call this an <em>"uprising"</em> —
          acknowledging its nationalist significance. Spanish authorities used <em>"mutiny"</em>{' '}
          to minimize its political weight. Jesuit historian <strong>John Schumacher, S.J.</strong>{' '}
          (Philippine Studies, 2011) found that a small Masonic circle may have harbored
          separatist intent — but crucially, <em>none of them were GOMBURZA</em>, and none
          were prosecuted. The <strong>NHCP</strong> officially recognizes both interpretations,
          calling it an event with <strong>"two historical faces"</strong> — but the key fact
          is uncontested: the immediate trigger was a labor dispute, not a revolution.
        </p>
      </motion.aside>
    </SectionWrapper>
  )
}

function BalanceScale() {
  return (
    <div className={styles.scale}>
      <motion.div
        className={`${styles.scalePan} ${styles.scalePanLeft}`}
        initial={{ rotate: 0 }}
        whileInView={{ rotate: -10 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
      >
        <div className={styles.panContent}>
          <span className={styles.panIcon}>⚖</span>
          <span className={styles.panTitle}>Labor Grievance</span>
          <span className={styles.panDesc}>
            Lost wages. Lost exemptions from polo y servicios (forced labor) and tribute.
            Workers demanding what was taken from them without warning.
          </span>
          <div className={styles.panWeight}>Historically Supported</div>
        </div>
        <div className={styles.panArm} />
      </motion.div>

      <div className={styles.scalePivot}>
        <div className={styles.pivotPost} />
        <div className={styles.pivotBase} />
      </div>

      <motion.div
        className={`${styles.scalePan} ${styles.scalePanRight}`}
        initial={{ rotate: 0 }}
        whileInView={{ rotate: 10 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
      >
        <div className={styles.panArm} />
        <div className={`${styles.panContent} ${styles.panContentRight}`}>
          <span className={styles.panIcon}>👑</span>
          <span className={styles.panTitle}>Nationalist Revolt</span>
          <span className={styles.panDesc}>
            Spain's narrative. A sweeping conspiracy led by clergy and ilustrados.
            No documents. No manifesto. No credible evidence linking GOMBURZA to the plot.
          </span>
          <div className={`${styles.panWeight} ${styles.panWeightLight}`}>Spain's Claim: Unverified</div>
        </div>
      </motion.div>
    </div>
  )
}
