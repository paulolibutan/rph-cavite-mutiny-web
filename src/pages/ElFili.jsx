import { motion } from 'framer-motion'
import RippleDiagram from '../components/RippleDiagram'
import ImagePlaceholder from '../components/ImagePlaceholder'
import styles from './ElFili.module.css'

const IMPACTS = [
  {
    num: '01',
    fact: 'Published September 1891 — Ghent, Belgium',
    detail: 'Rizal chose Ghent\'s F. Meyer-Van Loo Press for a purely practical reason: it was the cheapest printer willing to accept installment payment. He was nearly destitute. His friend Valentín Ventura stepped in and funded the final printing costs — earning Ventura the title "Savior of the Fili." The first print run was approximately 2,000 copies.',
  },
  {
    num: '02',
    fact: 'Dedicated explicitly to GOMBURZA',
    detail: 'Rizal\'s dedication — one of Philippine literature\'s most powerful acts of defiance — names each priest, questions their guilt publicly, and declares that the Philippines mourns them as martyrs. By writing it, Rizal converted three dead men into the philosophical foundation of an entire generation\'s resistance.',
  },
  {
    num: '03',
    fact: 'Smuggled, banned, and still read everywhere',
    detail: 'The Spanish colonial government immediately banned El Filibusterismo. Copies were smuggled in through sailors, returning ilustrados, and sympathetic merchants. By the early 1890s, the novel was circulating among Katipunan members. Andres Bonifacio himself read both Rizal novels before founding the revolutionary society.',
  },
]

export default function ElFili() {
  return (
    <section id="el-fili" className={`page-section ${styles.section}`}>
      <div className={`section-container ${styles.inner}`}>

        {/* Header */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className={`eyebrow ${styles.eyebrow}`}>Ghent, Belgium · September 1891</span>
          <h2 className={`section-title ${styles.title}`}>El Filibusterismo</h2>
          <p className={`section-subtitle ${styles.subtitle}`}>
            Rizal's second novel was not just literature — it was a reckoning.
            Darker, more radical, and more dangerous than Noli Me Tangere, it asked
            the question the first novel dared not: <em>what happens when reform fails?</em>
          </p>
        </motion.header>

        {/* Rizal portrait */}
        <motion.div
          className={styles.rizalPortraitRow}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.rizalPortrait}>
            <figure className={styles.elFiliFigure}>
              <img
                src="/images/jose-rizal.jpg"
                alt="José Rizal, c. 1890 — Brussels or Ghent"
                className={styles.elFiliImg}
              />
              <figcaption className={styles.elFiliCaption}>
                Rizal was 29 when <em>El Filibusterismo</em> was published. He paid for
                printing in installments — nearly destitute in exile.
              </figcaption>
            </figure>
          </div>
          <div className={styles.rizalBookCover}>
            <figure className={styles.elFiliFigure}>
              <img
                src="/images/el-fili.jpg"
                alt="El Filibusterismo — first edition cover, Ghent 1891"
                className={styles.elFiliImg}
              />
              <figcaption className={styles.elFiliCaption}>
                The first edition. ~2,000 copies printed. Immediately banned by Spanish
                colonial authorities in the Philippines.
              </figcaption>
            </figure>
          </div>
        </motion.div>

        {/* Noli vs El Fili quick comparison */}
        <motion.div
          className={styles.novelCompare}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.novelCard}>
            <span className={styles.novelYear}>1887</span>
            <h3 className={styles.novelTitle}>Noli Me Tangere</h3>
            <p className={styles.novelDesc}>
              A novel of <strong>exposure</strong> — sentimental, romantic, emotional.
              It showed Filipinos what colonial abuse looked like and appealed to Spain's
              sense of justice. Rizal still believed in reform through dialogue.
            </p>
          </div>
          <div className={styles.novelArrow} aria-hidden="true">→</div>
          <div className={`${styles.novelCard} ${styles.novelCardActive}`}>
            <span className={styles.novelYear}>1891</span>
            <h3 className={styles.novelTitle}>El Filibusterismo</h3>
            <p className={styles.novelDesc}>
              A novel of <strong>political argument</strong> — dark, tragic, revolutionary.
              The protagonist Simoun plans to blow up an entire ballroom of colonial elites.
              Rizal no longer believed dialogue was enough. Four years had changed everything.
            </p>
          </div>
        </motion.div>

        {/* Book layout */}
        <div className={styles.bookLayout}>
          <motion.div
            className={styles.bookWrapper}
            initial={{ opacity: 0, rotateY: -15, scale: 0.95 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ perspective: 1200 }}
          >
            <div className={styles.book}>
              {/* Left page — Dedication */}
              <div className={styles.page}>
                <span className={styles.pageNum}>i</span>
                <h3 className={styles.pageHeading}>The Dedication</h3>
                <p className={styles.dropCapText}>
                  <span className={styles.dropCap}>T</span>o the memory of the priests
                  Don Mariano Gomez (72 years old), Don José Burgos (35 years old), and
                  Don Jacinto Zamora (37 years old). Executed in Bagumbayan Field on the
                  17th of February, 1872.
                </p>
                <p className={styles.dedicationContinued}>
                  The Church, by refusing to degrade you, has placed in doubt the crime
                  that has been imputed to you; the Government, by surrounding your trials
                  with mystery and shadows, causes the belief that there was some error,
                  committed in fatal moments; and all the Philippines, by worshiping your
                  memory and calling you martyrs, in no sense recognizes your culpability.
                </p>
                <p className={styles.dedicationNote}>
                  ✦ The original dedication contained Rizal's own factual errors on ages
                  and the date. The corrected version above reflects verified historical records.
                </p>
                <div className={styles.ribbon} aria-hidden="true" />
              </div>

              {/* Spine */}
              <div className={styles.spine} aria-hidden="true">
                <span className={styles.spineText}>El Filibusterismo</span>
              </div>

              {/* Right page — Impact */}
              <div className={`${styles.page} ${styles.pageRight}`}>
                <span className={styles.pageNum}>ii</span>
                <h3 className={styles.pageHeading}>The Impact</h3>
                <div className={styles.impactList}>
                  {IMPACTS.map((item, i) => (
                    <motion.div
                      key={i}
                      className={styles.impactItem}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: i * 0.18 }}
                    >
                      <span className={styles.impactNum}>{item.num}</span>
                      <div>
                        <p className={styles.impactFact}>{item.fact}</p>
                        <p className={styles.impactDetail}>{item.detail}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Simoun explainer */}
        <motion.div
          className={styles.simounBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
        >
          <p className={styles.simounLabel}>Who is Simoun?</p>
          <p className={styles.simounText}>
            Simoun is the alter ego of Juan Crisóstomo Ibarra — the idealistic young
            reformist from <em>Noli Me Tangere</em> — who faked his death, spent 13 years
            abroad accumulating wealth, and returned to the Philippines as a shadowy jeweler
            and adviser to the colonial government. He represents the death of gradualist
            reform. He plans to detonate a bomb at a student wedding, killing colonial
            officials in one act of mass violence. The bomb fails. Simoun escapes into the
            night, mortally wounded. Rizal's message is clear: revolution built on hatred
            and revenge — without a people ready for freedom — is doomed to fail.
          </p>
        </motion.div>

        {/* Ripple diagram */}
        <div className={styles.rippleSection}>
          <motion.p
            className={styles.rippleLabel}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How the Novel's Influence Spread
          </motion.p>
          <RippleDiagram />
        </div>

        {/* Pull quote */}
        <motion.blockquote
          className={styles.pullQuote}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <p>"I have written this book for the Filipinos — for those who suffer, for those who love."</p>
          <cite>— Jose Rizal, letter to Ferdinand Blumentritt, 1891</cite>
        </motion.blockquote>

      </div>
    </section>
  )
}
