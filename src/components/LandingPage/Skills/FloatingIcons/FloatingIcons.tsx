import { MotionValue, motion, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import classes from './FloatingIcons.module.scss'
import { Icon } from './Icon/Icon'

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
  return (
    <motion.div className={classes.root}>
      {icons.map((icon, index) => (
        <Icon key={index} index={index} progress={progress} src={icon} />
      ))}
    </motion.div>
  )
}
