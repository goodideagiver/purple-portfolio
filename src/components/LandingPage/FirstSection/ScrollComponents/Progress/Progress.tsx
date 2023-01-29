import classes from './Progress.module.scss'

import { motion, MotionValue, useSpring, useTransform } from 'framer-motion'

type Props = {
  scrollProgress: MotionValue<number>
}

export const Progress = ({ scrollProgress }: Props) => {
  const progress = useTransform(
    useSpring(scrollProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }),
    [0, 0.97],
    [0, 1]
  )

  return (
    <motion.div
      style={{
        scaleX: progress,
      }}
      className={classes.progress}
    />
  )
}
