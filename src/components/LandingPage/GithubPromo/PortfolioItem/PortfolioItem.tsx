import clsx from 'clsx'
import {
  MotionValue,
  useInView,
  useScroll,
  useTransform,
  motion,
  useSpring,
} from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import classes from './PortfolioItem.module.scss'

export type Props = {
  title: string
  description: string
  image: string
  link: string
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

export const PortfolioItem = ({ description, image, link, title }: Props) => {
  const ref = useRef<HTMLLIElement>(null)

  const inView = useInView(ref, {
    amount: 1,
    once: true,
  })

  const { scrollYProgress } = useScroll({
    target: ref,
  })

  const y = useSpring(useParallax(scrollYProgress, 10), {
    bounce: 0,
    damping: 100,
  })

  return (
    <li ref={ref} className={clsx(classes.root, inView && classes.visible)}>
      <motion.div className={classes.image} style={{ y }}>
        <Image width={800} height={800} src={image} alt={title} />
      </motion.div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a className={classes.link} href={link}>
        See more
      </a>
    </li>
  )
}
