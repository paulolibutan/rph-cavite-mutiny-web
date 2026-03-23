import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styles from './Sources.module.css'

const CITATIONS = [
  {
    author: 'Agoncillo, Teodoro A.',
    title: 'History of the Filipino People',
    pub: '8th ed. Quezon City: C&E Publishing, 1990. ISBN: 971-8711-06-6.',
    note: 'The definitive nationalist-perspective synthesis of Philippine history. Frames the Cavite Mutiny as the watershed moment of Filipino national consciousness — the starting point of the modern independence struggle.',
  },
  {
    author: 'Ocampo, Ambeth R.',
    title: '"Gomburza, 1872."',
    pub: 'Philippine Daily Inquirer, Looking Back column. February 18, 2022.',
    note: 'Primary source for the popular-history interpretation of GOMBURZA; corrects common errors about the execution date and the factual mistakes in Rizal\'s own dedication. Ocampo\'s archival approach provides a counterweight to nationalist-teleological readings.',
  },
  {
    author: 'Ocampo, Ambeth R.',
    title: '"Gomburza: Conflicted Details."',
    pub: 'Philippine Daily Inquirer, Looking Back column. December 29, 2023.',
    note: 'Surveys the disputed facts around GOMBURZA — ages, dates, trial records — and cautions against uncritical acceptance of either the Spanish colonial narrative or the nationalist-martyrdom account.',
  },
  {
    author: 'Schumacher, John N., S.J.',
    title: '"The Cavite Mutiny: Toward a Definitive History."',
    pub: 'Philippine Studies 59, no. 1 (2011). Quezon City: Ateneo de Manila University Press. DOI: available via Project MUSE.',
    note: 'The most rigorous primary-source examination of the mutiny. Schumacher\'s key findings: (1) GOMBURZA were innocent — the sole witness, Francisco Saldua, was bribed and his testimony uncorroborated; (2) a small Masonic circle (Inocencio, de los Reyes, Mendoza) may have had separatist intent but escaped prosecution, likely because Izquierdo himself was a Mason; (3) Spain\'s "vast conspiracy" narrative was politically fabricated. The standard "0 evidence of any conspiracy" claim must be qualified — Schumacher finds limited evidence of a separatist fringe, but none involving GOMBURZA.',
  },
  {
    author: 'Schumacher, John N., S.J., and Nicholas P. Cushner.',
    title: '"Documents Relating to Father Jose Burgos and the Cavite Mutiny of 1872."',
    pub: 'Philippine Studies 17, no. 3 (1969). Quezon City: Ateneo de Manila University Press.',
    note: 'Primary source compilation with scholarly analysis; essential for understanding Burgos\'s political writings and the evidentiary basis (or lack thereof) for the charges against GOMBURZA.',
  },
  {
    author: 'Plauchut, Edmond.',
    title: 'Eyewitness Account of the GOMBURZA Execution.',
    pub: 'Originally published in French, 1877. Translated and reprinted in La Solidaridad, February 15, 1892.',
    note: 'The primary eyewitness source for the execution at Bagumbayan. Compiled from accounts by Joaquín Pardo de Tavera and Antonio Regidor. Documents the demeanor of each priest at their death.',
  },
  {
    author: 'National Historical Commission of the Philippines (NHCP).',
    title: '"The Two Faces of the 1872 Cavite Mutiny" and "Sparks of Resistance: 150th Anniversary of the 1872 Cavite Mutiny."',
    pub: 'NHCP official publications, 2022. nhcp.gov.ph.',
    note: 'The Philippine government\'s official historiographical position: two distinct interpretations of the mutiny exist (Filipino labor-grievance reading vs. Spanish separatist-conspiracy reading) and both are historically significant.',
  },
  {
    author: 'Rizal, Jose.',
    title: 'El Filibusterismo (The Reign of Greed).',
    pub: 'Ghent: F. Meyer-Van Loo Press, 1891. Trans. Charles Derbyshire. Manila: Philippine Education Company, 1912.',
    note: 'Primary source — the dedication and novel itself as evidence of GOMBURZA\'s influence on Rizal. Note: Rizal\'s dedication contains his own factual errors (wrong ages, wrong date). Verified ages: Gomez 72, Burgos 35, Zamora 37. Verified date: February 17, 1872.',
  },
  {
    author: 'Pardo de Tavera, Trinidad H.',
    title: 'Contemporary Filipino scholarly commentaries on the mutiny.',
    pub: 'Various publications, 1870s–1900s.',
    note: 'The most important contemporary Filipino scholarly voice on the mutiny. Argued unequivocally that it was a protest against Izquierdo\'s abolition of privileges, deliberately magnified by the Spanish authorities to frame the secular clergy. Stated explicitly that Madrid accepted Izquierdo\'s conspiracy narrative "without any attempt to investigate the real facts."',
  },
  {
    author: 'Ricketts, George T.',
    title: 'British Consul\'s Official Dispatch on the Cavite Mutiny.',
    pub: 'British Foreign Office Correspondence, January–February 1872. Archived in the UK National Archives.',
    note: 'The single most important independent contemporary eyewitness account. As a non-Spanish, non-Filipino diplomatic observer with no political stake in the outcome, Ricketts confirmed approximately 350 participants and attributed the uprising directly to the abolition of tribute and forced-labor exemptions. Modern historians treat this as the most reliable primary source on the mutiny\'s actual cause.',
  },
]

const BOOKS = [
  { title: 'Noli Me Tangere', author: 'Jose Rizal', year: '1887' },
  { title: 'El Filibusterismo', author: 'Jose Rizal', year: '1891' },
  { title: 'Rizal Without the Overcoat', author: 'Ambeth Ocampo', year: '2000' },
  { title: 'History of the Filipino People', author: 'T. Agoncillo', year: '1990' },
  { title: 'Revolutionary Clergy', author: 'J.N. Schumacher', year: '1981' },
]

const DISPUTED = [
  { item: 'Execution date', correct: 'February 17, 1872', wrong: 'February 28 (appears in some El Fili dedication reprints — Rizal\'s own error)' },
  { item: 'Fr. Gomez\'s age', correct: '72 (born 1799)', wrong: '85 (in Rizal\'s original dedication)' },
  { item: 'Fr. Burgos\'s age', correct: '35 (born 1837)', wrong: '30 (in Rizal\'s original dedication)' },
  { item: 'Privileges abolished', correct: 'Tribute + polo y servicios exemptions', wrong: 'Some texts incorrectly add the bandala — not confirmed in primary sources' },
  { item: 'Cry of Pugad Lawin', correct: 'August 23, 1896 (official government date, 1963)', wrong: 'August 26 — cited in older historical accounts; debate continues' },
  { item: '"Zero evidence of conspiracy" claim', correct: 'Zero credible evidence linked GOMBURZA to the mutiny. Schumacher (2011): the sole witness was bribed, trial records vanished, GOMBURZA were innocent.', wrong: 'Oversimplification: Schumacher identifies a small Masonic separatist circle (not GOMBURZA) — though they were not prosecuted. Spain\'s "vast conspiracy" narrative is the fabrication; a fringe separatist intent may have existed separately.' },
]

export default function Sources() {
  return (
    <section id="sources" className={`page-section ${styles.section}`}>
      <div className={`section-container ${styles.inner}`}>

        {/* Back navigation */}
        <motion.div
          className={styles.backNav}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <Link to="/" className={styles.backLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Story
          </Link>
        </motion.div>

        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className={`eyebrow ${styles.eyebrow}`}>References & Further Reading</span>
          <h2 className={`section-title ${styles.title}`}>Sources</h2>
          <p className={styles.note}>
            This site presents the mainstream historiographical interpretation as argued by
            Agoncillo, Ocampo, Schumacher, and the NHCP. The thesis — that the Cavite Mutiny
            was primarily a labor action exploited by Spain — reflects the prevailing academic
            view. A key nuance: while <strong>zero credible evidence</strong> linked GOMBURZA
            to the mutiny (Schumacher, 2011), a small Masonic separatist circle may have
            existed separately — but these individuals were never prosecuted, and were not
            among those Spain executed. Spain's "vast conspiracy" narrative was politically
            fabricated. All major claims on this site are cross-referenced against
            peer-reviewed Philippine historiography and primary source documents.
          </p>
        </motion.header>

        {/* Disputed facts table */}
        <div className={styles.disputedSection}>
          <motion.h3
            className={styles.disputedHeading}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Commonly Disputed Facts — Know the Difference
          </motion.h3>
          <div className={styles.disputedTable}>
            {DISPUTED.map((row, i) => (
              <motion.div
                key={i}
                className={styles.disputedRow}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                <span className={styles.disputedItem}>{row.item}</span>
                <div className={styles.disputedCols}>
                  <div className={styles.disputedCorrect}>
                    <span className={styles.disputedLabel}>Verified ✓</span>
                    <span className={styles.disputedValue}>{row.correct}</span>
                  </div>
                  <div className={styles.disputedWrong}>
                    <span className={styles.disputedLabel}>Common Error ✗</span>
                    <span className={styles.disputedValue}>{row.wrong}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Citations */}
        <div className={styles.citationsGrid}>
          {CITATIONS.map((c, i) => (
            <motion.div
              key={i}
              className={styles.citation}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <p className={styles.citationText}>
                <span className={styles.citationAuthor}>{c.author}</span>{' '}
                <em className={styles.citationTitle}>{c.title}</em>{' '}
                <span className={styles.citationPub}>{c.pub}</span>
              </p>
              {c.note && <p className={styles.citationNote}>{c.note}</p>}
            </motion.div>
          ))}
        </div>

        {/* Recommended reading */}
        <div className={styles.booksSection}>
          <motion.h3
            className={styles.booksHeading}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Recommended Reading
          </motion.h3>
          <div className={styles.bookShelf}>
            {BOOKS.map((book, i) => (
              <motion.div
                key={i}
                className={styles.bookSpine}
                style={{ '--book-i': i }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className={styles.bookTitle}>{book.title}</span>
                <span className={styles.bookAuthor}>{book.author}</span>
                <span className={styles.bookYear}>{book.year}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.footerText}>
            Built for <em>Readings in Philippine History</em> — HUMSS Track · Senior High School
          </p>
          <p className={styles.footerSub}>
            All historical claims reflect peer-reviewed Philippine historiography and primary
            source documents. Disputed facts are clearly marked. This site is intended for
            educational purposes.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
