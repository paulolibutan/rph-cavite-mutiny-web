import styles from './ImagePlaceholder.module.css'

/**
 * ImagePlaceholder — drop-in slot for a real <img> or <picture>.
 *
 * Props:
 *   label       — what the image depicts  (e.g. "Portrait of Fr. Jose Burgos")
 *   source      — where to get it         (e.g. "Wikimedia Commons")
 *   aspectRatio — CSS aspect-ratio value  (default "4 / 3")
 *   caption     — optional <figcaption>
 *   size        — "sm" | "md" (default) | "lg" | "full"
 *
 * To replace with a real image, swap the whole component for:
 *   <img src="..." alt="..." className={styles.realImg} />
 */
export default function ImagePlaceholder({
  label,
  source,
  aspectRatio = '4 / 3',
  caption,
  size = 'md',
}) {
  return (
    <figure
      className={`${styles.figure} ${styles[size]}`}
      style={{ aspectRatio }}
      aria-label={`Image placeholder: ${label}`}
    >
      <div className={styles.inner}>
        {/* Camera / image icon */}
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>

        <p className={styles.label}>{label}</p>

        <p className={styles.sourceText}>
          <span className={styles.sourcePrefix}>Suggested source: </span>
          {source}
        </p>

        <span className={styles.badge}>IMAGE PLACEHOLDER</span>
      </div>

      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  )
}
