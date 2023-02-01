import { MotionValue, motion, useTransform, useSpring } from 'framer-motion'
import classes from './CommitSquare.module.scss'

type Props = {
  progress: MotionValue<number>
  inputRange?: [number, number]
}

export const CommitSquare = ({ progress, inputRange = [0, 1] }: Props) => {
  const opacity = useSpring(useTransform(progress, inputRange, [0, 1]))
  const y = useSpring(useTransform(progress, inputRange, [10, 0]))

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className={classes.root}
    />
  )
}
