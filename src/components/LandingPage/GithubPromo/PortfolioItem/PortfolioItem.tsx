import clsx from 'clsx'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import classes from './PortfolioItem.module.scss'

export type Props = {
  title: string
  description: string
  image: string
  link: string
}

export const PortfolioItem = ({ description, image, link, title }: Props) => {
  const ref = useRef<HTMLLIElement>(null)

  const inView = useInView(ref, {
    amount: 1,
    once: true,
  })

  return (
    <li ref={ref} className={clsx(classes.root, inView && classes.visible)}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Image src={image} alt={title} />
      <a href={link}>See more</a>
    </li>
  )
}
