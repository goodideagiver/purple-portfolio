import { ReactNode, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import classes from './SkillSquare.module.scss'
import { useScroll, motion, useInView, useTransform } from 'framer-motion'
import { Icon } from './Icon/Icon'

type Props = {
  children: ReactNode
  icon?: string
  color?: string
}

export const SkillSquare = ({ children, icon, color }: Props) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className={classes.root}
      style={{
        backgroundImage: `linear-gradient(to bottom,transparent,${color})`,
      }}
    >
      <motion.div className={classes.iconWrapper}>
        {icon &&
          Array.from({ length: 10 }).map((_, index) => (
            <Icon key={index} icon={icon} />
          ))}
      </motion.div>
      <p className={classes.text}>{children}</p>
    </div>
  )
}
