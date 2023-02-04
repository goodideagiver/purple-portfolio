import { MotionValue } from 'framer-motion'
import Image from 'next/image'
import classes from './Stars.module.scss'

type Props = {
  progress: MotionValue<number>
}

export const Stars = ({ progress }: Props) => {
  return (
    <div className={classes.root}>
      <Image
        width={3000}
        height={3000}
        className={classes.image}
        src='/stars.jpeg'
        alt=''
      />
    </div>
  )
}
