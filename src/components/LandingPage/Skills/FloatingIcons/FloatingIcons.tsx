import { MotionValue, motion, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import classes from './FloatingIcons.module.scss'

const iconProps: {
  width: number
  height: number
  ariaHidden: boolean
  className: string
} = {
  width: 90,
  height: 90,
  ariaHidden: true,
  className: classes.icon,
}

type Props = {
  progress: MotionValue<number>
}

export const FloatingIcons = ({ progress }: Props) => {
  const x = useSpring(useTransform(progress, [0.2, 1], [-50, 50]), {
    bounce: 0,
    damping: 15,
  })

  return (
    <motion.div
      style={{
        x,
      }}
      className={classes.root}
    >
      <Image
        style={{
          translate: '250px 50px',
          borderRadius: '8px',
        }}
        src='/typescript.svg'
        {...iconProps}
        alt=''
      />
      <Image
        style={{
          translate: '-250px -50px',
        }}
        src='/sass.png'
        {...iconProps}
        alt=''
      />
      <Image
        style={{
          translate: '50px 250px',
          filter: 'invert(1)',
        }}
        src='/next.svg'
        {...iconProps}
        alt=''
      />
      <Image
        style={{
          translate: '-50px -250px',
          filter: 'invert(1)',
        }}
        src='/vercel.svg'
        {...iconProps}
        alt=''
      />
      <Image
        style={{
          translate: '170px -230px',
        }}
        src='/react.svg'
        {...iconProps}
        alt=''
      />
    </motion.div>
  )
}
