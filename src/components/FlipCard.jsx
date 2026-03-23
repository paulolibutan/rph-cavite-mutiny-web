import { useState } from 'react'
import { motion } from 'framer-motion'
import ImagePlaceholder from './ImagePlaceholder'
import styles from './FlipCard.module.css'

export default function FlipCard({ priest, index }) {
  const [flipped, setFlipped] = useState(false)

  // Click-to-flip on ALL devices (mobile + desktop).
  // The old CSS :hover flip was removed because hovering the card "locks" the
  // back face as long as the cursor sits anywhere on the card — which feels
  // broken, especially at desktop where the card is large and the user can't
  // read the front while the mouse is nearby. Click gives intentional control.
  const toggle = () => setFlipped(v => !v)

  return (
    // Outer motion.div handles the entry animation ONLY (translateY + opacity).
    // DO NOT add transformStyle / preserve-3d here — doing so makes Framer
    // Motion's translateY run in the 3D context created by .wrapper's
    // perspective, which causes the card to render edge-on or at a wrong
    // angle during and after the entry animation.  The separation keeps things
    // clean: motion.div = 2-D entry slide; .wrapper = isolated 3-D stage.
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, delay: index * 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* .wrapper is the CSS perspective container — no Framer Motion here */}
      <div className={styles.wrapper}>
        <div
          className={`${styles.card} ${flipped ? styles.flipped : ''}`}
          onClick={toggle}
          role="button"
          tabIndex={0}
          aria-pressed={flipped}
          aria-label={`${priest.name} — click to ${flipped ? 'show front' : 'learn more'}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              toggle()
            }
          }}
        >
          {/* Front */}
          <div className={styles.face}>
            {/* Portrait — uses real image if provided, falls back to placeholder */}
            <div className={styles.portraitSlot}>
              {priest.img ? (
                <>
                  <img
                    src={priest.img}
                    alt={`Historical portrait of ${priest.name}`}
                    className={styles.portraitImg}
                  />
                  {priest.imgSource && (
                    <a
                      href={priest.imgSource}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.imgCredit}
                      onClick={e => e.stopPropagation()}
                    >
                      Source: Diocese of Imus
                    </a>
                  )}
                </>
              ) : (
                <ImagePlaceholder
                  label={`Historical portrait of ${priest.name}`}
                  source="Wikimedia Commons / López Enguídanos engravings, 1895"
                  aspectRatio="3 / 4"
                  size="full"
                />
              )}
            </div>
            <div className={styles.frontContent}>
              <span className={styles.order}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className={styles.name}>{priest.name}</h3>
              <p className={styles.title}>{priest.title}</p>
              <p className={styles.years}>{priest.years}</p>
              <span className={styles.flipHint}>Click to learn more</span>
            </div>
          </div>

          {/* Back */}
          <div className={`${styles.face} ${styles.back}`}>
            <h3 className={styles.backName}>{priest.name}</h3>
            <p className={styles.descriptor}>{priest.descriptor}</p>
            <p className={styles.bio}>{priest.bio}</p>
            <blockquote className={styles.epitaph}>
              <p>"{priest.epitaph}"</p>
            </blockquote>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function PriestSilhouette() {
  return (
    <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Head */}
      <ellipse cx="60" cy="38" rx="22" ry="26" fill="rgba(212,160,23,0.15)" stroke="rgba(212,160,23,0.3)" strokeWidth="1"/>
      {/* Collar / clerical band */}
      <rect x="52" y="63" width="16" height="8" rx="2" fill="rgba(212,160,23,0.25)" />
      {/* Cassock body */}
      <path d="M28 72 Q25 90 20 155 H100 Q95 90 92 72 Q76 78 60 78 Q44 78 28 72Z" fill="rgba(212,160,23,0.08)" stroke="rgba(212,160,23,0.2)" strokeWidth="1"/>
      {/* Arms */}
      <path d="M28 80 Q10 100 8 130" stroke="rgba(212,160,23,0.2)" strokeWidth="8" strokeLinecap="round"/>
      <path d="M92 80 Q110 100 112 130" stroke="rgba(212,160,23,0.2)" strokeWidth="8" strokeLinecap="round"/>
      {/* Cross accent */}
      <line x1="60" y1="88" x2="60" y2="110" stroke="rgba(212,160,23,0.35)" strokeWidth="1.5"/>
      <line x1="52" y1="95" x2="68" y2="95" stroke="rgba(212,160,23,0.35)" strokeWidth="1.5"/>
    </svg>
  )
}
