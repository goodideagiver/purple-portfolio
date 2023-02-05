import { MotionValue, motion, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'
import classes from './Icon.module.scss'

const iconProps: {
  width: number
  height: number
  className: string
} = {
  width: 40,
  height: 40,
  className: classes.icon,
}

type Props = {
  src: string
  index: number
  progress: MotionValue<number>
}

const iconsToInvert = ['/vercel.svg', '/next.svg']

const physics = {
  damping: 15,
  mass: 0.27,
  stiffness: 100,
}

const RANGE = 50

export const Icon = ({ index, progress, src }: Props) => {
  const reverse = index % 2 === 0 ? 1 : -1

  const speed = 1 / (index * 1 + 1)
  const rotation = RANGE * reverse * speed
  const offset = 1000 * index * speed * reverse

  const rotate = useTransform(
    progress,
    [0.1, 1],
    [offset + 0, offset + rotation]
  )

  const iconRotate = useTransform(
    progress,
    [0.1, 1],
    [-offset + 0, -offset - rotation]
  )

  return (
    <motion.div
      style={{
        x: '-50%',
        y: '-50%',
        scale: 1.8 - index / 6,
        rotate,
      }}
      className={classes.root}
    >
      <motion.div
        style={{
          rotate: iconRotate,
        }}
        className={classes.icon}
      >
        <Image
          style={{
            filter: iconsToInvert.includes(src) ? 'invert(1)' : 'none',
            scale: 1.8,
          }}
          src={src}
          alt='icon'
          {...iconProps}
        />
      </motion.div>
    </motion.div>
  )
}
