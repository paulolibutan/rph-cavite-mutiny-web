import { motion } from 'framer-motion'
import SectionWrapper from '../components/SectionWrapper'
import CompareCard from '../components/CompareCard'
import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './SpainsLie.module.css'

const COMPARISONS = [
  {
    question: 'Who actually participated?',
    truth: 'Around 200 soldiers and arsenal workers at Fort San Felipe, Cavite. Led by Sergeant Fernando La Madrid — a local mestizo. No evidence of organized contact with Manila-based reformers, clergy, or ilustrados.',
    spain: 'A widespread, city-spanning network of Filipino nationalists, reformist clergy, and educated ilustrados — a coordinated conspiracy stretching across the colony and its diaspora.',
  },
  {
    question: 'What caused the revolt?',
    truth: 'Governor-General Izquierdo abolished two privileges for Cavite workers: their exemption from polo y servicios (mandatory 40-day forced labor) and their exemption from the annual tribute tax. Workers lost real income. This was a labor grievance — confirmed by Pardo de Tavera, Agoncillo, and the NHCP\'s own publications.',
    spain: 'A treasonous plot to overthrow Spanish colonial rule and establish Filipino independence. Governor Izquierdo\'s official report to Madrid explicitly called it a "frustrated separatist revolution."',
  },
  {
    question: 'Were GOMBURZA involved?',
    truth: 'No credible evidence was produced — then or since. The sole testimony came from Francisco Saldua, a mutineer-turned-informant who was bribed, promised a pardon, then executed anyway. Trial records vanished. Schumacher (2011) identifies a small separate Masonic circle with possible separatist intent — but none were GOMBURZA, and none were prosecuted. GOMBURZA were targeted because they threatened friar control of parishes, not because they planned a mutiny.',
    spain: 'The three priests were declared the intellectual masterminds of the conspiracy. Their conviction was based on a single confessor\'s testimony, obtained under extreme duress, in a closed military court that convened and reached its verdict in a single day.',
  },
]

const GAZETTE_ITEMS = [
  {
    date: 'Jan 22, 1872',
    headline: 'Fort San Felipe Retaken — "Conspiracy" Declared',
    body: 'Governor Izquierdo sends a report to Madrid framing the mutiny as a grand separatist plot. The crackdown on Filipino reformers and secular clergy begins immediately.',
  },
  {
    date: 'Feb 15, 1872',
    headline: 'Secret Military Tribunal Convicts Three Priests in One Day',
    body: 'Gomez, Burgos, and Zamora are tried in a closed military court headed by Colonel Francisco Moscoso — entirely composed of their enemies. No defense is meaningfully permitted. Verdict: guilty.',
  },
  {
    date: 'Feb 17, 1872',
    headline: '40,000 Witnesses at Bagumbayan — A Warning to All Filipinos',
    body: 'The garrote is used before a massive crowd. Spain sends an unmistakable message: advocacy, reform, and association with liberal clergy will be punished by death.',
  },
  {
    date: 'Mar 1872',
    headline: 'Mass Deportation of Filipino Liberals and Reformers',
    body: 'Dozens of Filipino intellectuals, reformers, and lawyers are exiled to Marianas and elsewhere. The Cavite Mutiny serves as the blanket justification. The secular clergy movement is effectively crushed.',
  },
  {
    date: '1891',
    headline: "Rizal's El Filibusterismo: Spain's Greatest Miscalculation",
    body: 'The execution of GOMBURZA, intended to silence dissent, instead produced martyrs whose memory Rizal transformed into a revolutionary novel — and a generation of Filipinos transformed into a revolution.',
  },
]

export default function SpainsLie() {
  return (
    <SectionWrapper
      id="spains-lie"
      eyebrow="Colonial Propaganda — 1872"
      title="The Reframing"
      subtitle="A labor dispute became a conspiracy against the Crown — not on the ground in Cavite, but in Governor Izquierdo's dispatches to Madrid. Here is how a pay-stub grievance was turned into political purge."
      className={styles.section}
    >
      {/* Izquierdo portrait + framing note row */}
      <div className={styles.framingRow}>
        <motion.div
          className={styles.izquierdoPortrait}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <ImagePlaceholder
            label="Governor-General Rafael de Izquierdo, c. 1871–1873"
            source="Wikimedia Commons / Biblioteca Nacional de España"
            aspectRatio="3 / 4"
            size="full"
            caption="Izquierdo arrived with an explicit mandate to roll back liberal reforms. He needed the mutiny to be a conspiracy."
          />
        </motion.div>

      {/* Historian framing note */}
      <motion.div
        className={styles.framingNote}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55 }}
      >
        <span className={styles.framingIcon} aria-hidden="true">📚</span>
        <p>
          Historian <strong>Teodoro Agoncillo</strong> frames 1872 as the birth of Filipino
          nationalist consciousness. Jesuit scholar <strong>John Schumacher, S.J.</strong>{' '}
          argues the event was broader — a "frustrated separatist revolution" — while still
          rejecting Spain's identification of GOMBURZA as the instigators. The{' '}
          <strong>National Historical Commission of the Philippines (NHCP)</strong> officially
          recognizes two distinct historical interpretations of the mutiny, calling it an
          event with "two historical faces."
        </p>
      </motion.div>
      </div>{/* end framingRow */}

      {/* Compare cards */}
      <div className={styles.comparisons}>
        {COMPARISONS.map((c, i) => (
          <CompareCard key={i} {...c} index={i} />
        ))}
      </div>

      {/* Pull quote */}
      <motion.blockquote
        className={styles.pullQuote}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <span className={styles.quoteIcon} aria-hidden="true">"</span>
        <p>
          The mutiny was declared a conspiracy against the Crown — a convenient pretext
          for silencing Filipino voices that Spain had long feared and could no longer
          tolerate through ordinary means.
        </p>
        <cite>
          — Ambeth R. Ocampo, <em>"Gomburza, 1872,"</em> Philippine Daily Inquirer,
          February 18, 2022
        </cite>
      </motion.blockquote>

      {/* Gazette ticker */}
      <div className={styles.gazetteSection}>
        <motion.p
          className={styles.gazetteLabel}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Spain's Timeline of Repression
        </motion.p>
        <div className={styles.gazetteTrack}>
          {GAZETTE_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              className={styles.gazetteCard}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className={styles.gazetteDate}>{item.date}</span>
              <h4 className={styles.gazetteHeadline}>{item.headline}</h4>
              <p className={styles.gazetteBody}>{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
