import { motion } from 'framer-motion'
import ChainDiagram from '../components/ChainDiagram'
import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './Revolution.module.css'

const WHY_CARDS = [
  {
    icon: '📜',
    title: 'History Is Written by the Powerful',
    body: 'Governor Izquierdo\'s report to Madrid transformed a payroll dispute into a nationalist conspiracy — in writing, within days. The lesson: whoever controls the official record controls the historical narrative. The Cavite Mutiny\'s "two historical faces" (as the NHCP calls them) are a textbook example of how colonial authorities manufactured the stories that justified their violence.',
  },
  {
    icon: '✝',
    title: 'Martyrdom Creates Movements',
    body: 'Spain executed GOMBURZA to silence the secular clergy movement and intimidate Filipino reformers. Instead, it handed the nationalist cause its most powerful symbol. Rizal\'s dedication of El Filibusterismo, 19 years later, shows how completely Spain miscalculated: the death of three priests produced a literary and political movement that outlasted the empire itself.',
  },
  {
    icon: '✍',
    title: 'Art as the Most Dangerous Weapon',
    body: "Andres Bonifacio, founder of the Katipunan, read both Noli Me Tangere and El Filibusterismo. The Katipunan's use of 'K' orthography was a direct tribute to Rizal's linguistic advocacy. A novel written in a Belgian print shop by a nearly destitute exile ignited the imagination of a generation who had never left the Philippines — and sent them into revolution.",
  },
]

const CHAIN_DATES = [
  { year: 'Jan 20, 1872', event: 'Cavite Mutiny erupts at Fort San Felipe' },
  { year: 'Feb 17, 1872', event: 'GOMBURZA executed at Bagumbayan' },
  { year: 'Feb 15, 1889', event: 'La Solidaridad founded in Barcelona — Propaganda Movement begins' },
  { year: 'Sept 1891', event: 'El Filibusterismo published in Ghent, dedicated to GOMBURZA' },
  { year: 'July 7, 1892', event: 'Katipunan founded by Andres Bonifacio the day Rizal is exiled to Dapitan' },
  { year: 'Aug 23, 1896', event: 'Cry of Pugad Lawin — Philippine Revolution begins' },
]

export default function Revolution() {
  return (
    <section id="revolution" className={`page-section ${styles.section}`}>
      <div className={`section-container ${styles.inner}`}>

        {/* Header */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className={`eyebrow ${styles.eyebrow}`}>1872 → 1896 — The Chain Reaction</span>
          <h2 className={`section-title ${styles.title}`}>How It All Connected</h2>
          <p className={`section-subtitle ${styles.subtitle}`}>
            A labor strike. An unjust execution. A novel. A revolution.
            Every link in this chain was forged by Spain's own overreactions.
          </p>
        </motion.header>

        {/* Chain diagram */}
        <ChainDiagram />

        {/* Exact dates timeline strip */}
        <div className={styles.datesStrip}>
          <motion.p
            className={styles.datesLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Key Dates — Verified Historical Record
          </motion.p>
          <div className={styles.datesList}>
            {CHAIN_DATES.map((d, i) => (
              <motion.div
                key={i}
                className={styles.dateItem}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <span className={styles.dateYear}>{d.year}</span>
                <span className={styles.dateDivider} aria-hidden="true">—</span>
                <span className={styles.dateEvent}>{d.event}</span>
              </motion.div>
            ))}
          </div>
          <motion.p
            className={styles.datesNote}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            * The Cry of Pugad Lawin date (August 23, 1896) is the officially declared date
            per Philippine government proclamation (1963). Some older historical accounts cite
            August 26 — this remains a disputed point among historians.
          </motion.p>
        </div>

        {/* Bonifacio portrait + Cry of Pugad Lawin */}
        <div className={styles.imageRow}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <figure className={styles.revFigure}>
              <img
                src="/images/andres-bonifacio.jpg"
                alt="Andrés Bonifacio, Supremo of the Katipunan, c. 1894"
                className={styles.revImg}
              />
              <figcaption className={styles.revCaption}>
                Bonifacio read both <em>Noli Me Tangere</em> and <em>El Filibusterismo</em> before
                founding the Katipunan on July 7, 1892.
              </figcaption>
            </figure>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <figure className={styles.revFigure}>
              <img
                src="/images/cry-of-pugad-lawin.jpg"
                alt="Cry of Pugad Lawin — August 23, 1896"
                className={styles.revImg}
              />
              <figcaption className={styles.revCaption}>
                Katipuneros tore their <em>cedulas</em> (community tax certificates) as an act
                of defiance, launching the Philippine Revolution.
              </figcaption>
            </figure>
          </motion.div>
        </div>

        {/* Bonifacio connection */}
        <motion.div
          className={styles.bonifacioBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
        >
          <span className={styles.bonifacioIcon} aria-hidden="true">⚔</span>
          <div>
            <p className={styles.bonifacioTitle}>Bonifacio, Rizal, and the Katipunan</p>
            <p className={styles.bonifacioText}>
              Andres Bonifacio was a founding member of Rizal's <strong>La Liga Filipina</strong>{' '}
              (July 3, 1892). When Rizal was arrested and exiled to Dapitan on July 7 — the
              very day the Katipunan was founded — Bonifacio drew the decisive lesson: peaceful
              reform was impossible. He had read both Noli Me Tangere and El Filibusterismo.
              The Katipunan adopted "K" orthography as a tribute to Rizal's linguistic advocacy.
              Bonifacio reportedly wept upon learning of Rizal's execution in December 1896 —
              a man he admired deeply, whose books had given him the language of revolution.
            </p>
          </div>
        </motion.div>

        {/* Why it matters */}
        <div className={styles.whySection}>
          <motion.h3
            className={styles.whyHeading}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why This History Matters Today
          </motion.h3>
          <div className={styles.whyGrid}>
            {WHY_CARDS.map((card, i) => (
              <motion.div
                key={i}
                className={styles.whyCard}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <span className={styles.whyIcon} aria-hidden="true">{card.icon}</span>
                <h4 className={styles.whyTitle}>{card.title}</h4>
                <p className={styles.whyBody}>{card.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing banner */}
        <motion.div
          className={styles.closingBanner}
          initial={{ opacity: 0, scaleX: 0.92 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <blockquote className={styles.closingQuote}>
            <p>"The mutiny lasted one night.</p>
            <p>Its consequences lasted a century."</p>
          </blockquote>
          <p className={styles.closingCoda}>
            And it began with workers who simply wanted to keep their rights.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
