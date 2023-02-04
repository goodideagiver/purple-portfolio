import { MotionValue, motion, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import classes from './FloatingIcons.module.scss'

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
  progress: MotionValue<number>
}

const icons = [
  '/typescript.svg',
  '/sass.png',
  '/next.svg',
  '/vercel.svg',
  '/react.svg',
]

export const FloatingIcons = ({ progress }: Props) => {
  const x = useSpring(useTransform(progress, [0.2, 1], [-50, 50]), {
    bounce: 0,
    damping: 15,
  })

  const rotate = useSpring(useTransform(progress, [0.2, 1], [0, 360]))

  const iconRotate = useSpring(useTransform(progress, [0.2, 1], [0, -360]))

  return (
    <motion.div className={classes.root}>
      {icons.map((icon, index) => (
        <motion.div
          style={{
            x: '-50%',
            y: '-50%',
            scale: 1 + index / 3,
            rotate,
          }}
          key={index}
          className={classes.iconContainer}
        >
          <motion.div
            className={classes.icon}
            style={{
              rotate: iconRotate,
            }}
          >
            <Image
              style={{
                filter:
                  icon === '/vercel.svg' || icon === '/next.svg'
                    ? 'invert(1)'
                    : 'none',
              }}
              src={icon}
              alt='icon'
              {...iconProps}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
