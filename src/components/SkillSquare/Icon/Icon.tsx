import clsx from 'clsx'
import { useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import classes from './Icon.module.scss'

type Props = {
  icon: string
}

export const Icon = ({ icon }: Props) => {
  const ref = useRef(null)

  const inView = useInView(ref, {
    margin: '-20%',
  })

  return (
    <Image
      ref={ref}
      src={icon}
      alt=''
      aria-hidden='true'
      width={100}
      height={100}
      className={clsx(classes.root, inView && classes.inView)}
    />
  )
}
