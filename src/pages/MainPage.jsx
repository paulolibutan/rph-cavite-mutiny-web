import { useReducedMotion } from 'framer-motion'
import Hero from './Hero'
import Mutiny from './Mutiny'
import SpainsLie from './SpainsLie'
import Gomburza from './Gomburza'
import ElFili from './ElFili'
import Revolution from './Revolution'

export default function MainPage() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      <Hero reduceMotion={shouldReduceMotion} />
      <Mutiny reduceMotion={shouldReduceMotion} />
      <SpainsLie reduceMotion={shouldReduceMotion} />
      <Gomburza reduceMotion={shouldReduceMotion} />
      <ElFili reduceMotion={shouldReduceMotion} />
      <Revolution reduceMotion={shouldReduceMotion} />
    </>
  )
}
