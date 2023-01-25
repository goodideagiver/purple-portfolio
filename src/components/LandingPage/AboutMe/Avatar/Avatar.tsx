import Image from 'next/image'
import classes from './Avatar.module.scss'

export const Avatar = () => {
  return (
    <div className={classes.root}>
      <Image
        className={classes.image}
        width={100}
        height={100}
        src='/purple.png'
        alt=''
        aria-hidden='true'
      />
    </div>
  )
}
