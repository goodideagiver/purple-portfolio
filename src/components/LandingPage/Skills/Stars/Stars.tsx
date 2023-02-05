import { MotionValue, motion, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import classes from './Stars.module.scss'

type Props = {
  progress: MotionValue<number>
}

const physics = {
  damping: 80,
  mass: 0.27,
  stiffness: 100,
}

export const Stars = ({ progress }: Props) => {
  const x = useTransform(progress, [0.1, 1], [0, -20])
  return (
    <motion.div
      style={{
        x,
      }}
      className={classes.root}
    >
      <Image
        width={3000}
        height={3000}
        sizes='(max-width: 600px) 300px, 600px'
        className={classes.image}
        src='/stars.jpeg'
        alt=''
      />
    </motion.div>
  )
}
