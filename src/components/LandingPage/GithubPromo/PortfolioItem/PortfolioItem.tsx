import clsx from 'clsx'
import {
  MotionValue,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { OldNotepad } from '../../../OldNotepad/OldNotepad'
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
    <OldNotepad title={title}>
      <li ref={ref} className={clsx(classes.root, inView && classes.visible)}>
        <p>{description}</p>
        <a className={classes.link} href={link}>
          See more
        </a>
      </li>
    </OldNotepad>
  )
}
