import { ReactNode, useEffect, useRef, useState } from 'react'
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
  const [opacity, setOpacity] = useState(0)

  const detectHowCloseToTheScreenXAxis = () => {
    const element = ref.current
    if (!element) return
    const { left } = element.getBoundingClientRect()
    const width = window.innerWidth
    const percentageToTheXAxis = (left + element.offsetWidth) / width
    setOpacity(1.5 - +percentageToTheXAxis.toFixed(2))
  }

  useEffect(() => {
    window.addEventListener('scroll', detectHowCloseToTheScreenXAxis)
    return () => {
      window.removeEventListener('scroll', detectHowCloseToTheScreenXAxis)
    }
  }, [children])

  return (
    <div
      ref={ref}
      className={classes.root}
      style={{
        backgroundImage: `linear-gradient(to bottom,transparent,${color})`,
      }}
    >
      <motion.div
        className={classes.iconWrapper}
        style={{
          transform: `translateX(${opacity * 5}%)`,
          opacity: opacity,
        }}
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
