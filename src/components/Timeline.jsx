import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Timeline.module.css'

const EVENTS = [
  {
    date: '1868–1871',
    title: 'The Abolition of Privileges',
    body: 'Governor-General Rafael de Izquierdo strips Cavite arsenal workers of two long-held privileges: exemption from polo y servicios (the mandatory 40-day annual forced labor required of all Filipino men aged 16–60) and exemption from the annual tribute tax. These were not small benefits — they were the core reason many families had generations of loyal service to the Spanish navy. Losing them meant an immediate, painful cut in real income.',
    tag: 'Root Cause',
  },
  {
    date: 'Jan 20, 1872 (Payday)',
    title: 'The Deductions That Triggered Everything',
    body: 'On payday, workers open their pay envelopes and find money missing — the new tribute and labor fees deducted without prior notice. That evening, Sergeant Fernando La Madrid (a mestizo from Bicol stationed at the arsenal) organizes roughly 200 soldiers, sailors, and workers. They make a critical miscalculation: they believe fireworks from the feast of Our Lady of Loreto in Sampaloc, Manila are the pre-arranged signal rockets for a coordinated city-wide uprising. They act on this misreading.',
    tag: 'The Trigger',
  },
  {
    date: 'Night of Jan 20, 1872',
    title: 'The Seizure of Fort San Felipe',
    body: 'The mutineers overpower the small garrison and seize Fort San Felipe. They fire the fort\'s carronades (short-range cannons) as a signal to supposed allies in Manila. No response comes. There is no coordinated nationalist movement waiting. No Manila-based organization has arranged a joint revolt. The mutineers are completely isolated — 200 men in a fort, waiting for an uprising that will never arrive.',
    tag: 'The Event',
  },
  {
    date: 'Jan 22, 1872',
    title: 'Retaken in Under 48 Hours',
    body: 'General Felipe Ginovés leads Spanish forces in an assault on Fort San Felipe. After roughly one hour of fighting, the fort is retaken. 41 soldiers die in the battle. Sergeant La Madrid is killed. On January 27, 13 mutineers are publicly executed — 9 in Manila, 4 in Cavite. Around 58 others receive 10-year prison sentences. By any historical measure: a local, spontaneous labor action, quickly and violently suppressed.',
    tag: 'Suppressed',
  },
  {
    date: 'Feb–Mar 1872',
    title: "Spain Rewrites the Story",
    body: 'Governor Izquierdo sends a report to Madrid declaring the mutiny a grand separatist conspiracy against the Crown. He names Filipino secular priests and liberal reformers as the masterminds. Three priests — Gomez, Burgos, and Zamora — are arrested on no credible evidence. A secret military tribunal convicts them on February 15. Two days later, they are executed. The entire apparatus of the colonial state transforms what a pay-stub grievance into a political purge. The Cavite Mutiny ends. The road to the Philippine Revolution begins.',
    tag: 'The Lie',
  },
]

export default function Timeline() {
  const [open, setOpen] = useState(null)

  return (
    <div className={styles.timeline} role="list">
      <motion.div
        className={styles.line}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ transformOrigin: 'top' }}
        aria-hidden="true"
      />

      {EVENTS.map((event, i) => (
        <motion.div
          key={i}
          className={styles.item}
          role="listitem"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <button
            className={`${styles.node} ${open === i ? styles.nodeActive : ''}`}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`timeline-detail-${i}`}
          >
            <span className={styles.nodeDot} aria-hidden="true" />
            <div className={styles.nodeHeader}>
              <span className={styles.nodeTag}>{event.tag}</span>
              <span className={styles.nodeDate}>{event.date}</span>
              <span className={styles.nodeTitle}>{event.title}</span>
            </div>
            <span className={styles.nodeChevron} aria-hidden="true">
              {open === i ? '−' : '+'}
            </span>
          </button>

          <AnimatePresence>
            {open === i && (
              <motion.div
                id={`timeline-detail-${i}`}
                className={styles.detail}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <p className={styles.detailText}>{event.body}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
