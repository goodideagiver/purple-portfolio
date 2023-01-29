import { MotionValue, motion, useTransform, useSpring } from 'framer-motion'
import classes from './BestDevBg.module.scss'

type Props = {
  scrollProgress: MotionValue<number>
}

const scaleProgressArray = [0.2, 0.3, 0.35]
const scaleConverted = [0, 1.5, 1]

const physics = { damping: 15, mass: 0.67, stiffness: 30 }

export const BestDevBg = ({ scrollProgress }: Props) => {
  const scale = useSpring(
    useTransform(scrollProgress, scaleProgressArray, scaleConverted),
    physics
  )
  const opacity = useTransform(scrollProgress, [0.38, 0.45], [1, 0])

  const firstLeft = useTransform(scrollProgress, [0.3, 0.45], ['0%', '150%'])
  const secondLeft = useTransform(scrollProgress, [0.3, 0.45], ['100%', '-50%'])

  return (
    <motion.div
      style={{
        userSelect: 'none',
        pointerEvents: 'none',
        opacity,
      }}
      className={classes.root}
    >
      <motion.div
        className={classes.circle2}
        style={{
          scale,
          left: firstLeft,
        }}
      />
      <motion.div
        className={classes.circle}
        style={{
          scale,
          left: secondLeft,
        }}
      />
    </motion.div>
  )
}
