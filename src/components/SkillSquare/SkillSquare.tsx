import { ReactNode, useRef } from 'react'
import Image from 'next/image'
import classes from './SkillSquare.module.scss'
import { useScroll, motion, useInView, useTransform } from 'framer-motion'

type Props = {
  children: ReactNode
  icon?: string
  color?: string
}

export const SkillSquare = ({ children, icon, color }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  const inView = useInView(ref, { amount: 0.9, once: true })

  return (
    <div
      ref={ref}
      className={classes.root}
      style={{
        backgroundImage: `linear-gradient(to bottom,transparent,${color})`,
      }}
    >
      <motion.div
        className={`${classes.iconWrapper} ${inView ? classes.inView : ''}`}
      >
        {icon &&
          Array.from({ length: 4 }).map((_, index) => (
            <Image
              key={index}
              src={icon}
              alt=''
              aria-hidden='true'
              width={100}
              height={100}
              className={classes.icon}
            />
          ))}
      </motion.div>
      <p className={classes.text}>{children}</p>
    </div>
  )
}
