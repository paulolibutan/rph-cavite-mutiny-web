import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

export function useCounter(target, duration = 1600, startOnView = true) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const started = useRef(false)

  useEffect(() => {
    if (!startOnView || !inView || started.current) return
    started.current = true

    if (target === 0) {
      // Dramatic zero: count up to a random number then snap to 0
      const peak = Math.floor(Math.random() * 8) + 5
      let start = null
      const peakTime = duration * 0.55

      const step = (timestamp) => {
        if (!start) start = timestamp
        const elapsed = timestamp - start

        if (elapsed < peakTime) {
          const progress = elapsed / peakTime
          const eased = progress * (2 - progress)
          setCount(Math.round(eased * peak))
          requestAnimationFrame(step)
        } else {
          setCount(0)
        }
      }
      requestAnimationFrame(step)
      return
    }

    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration, startOnView])

  return { count, ref }
}
