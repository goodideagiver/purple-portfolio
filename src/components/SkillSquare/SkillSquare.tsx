import { ReactNode } from 'react'
import Image from 'next/image'
import classes from './SkillSquare.module.scss'

type Props = {
  children: ReactNode
  icon?: string
  color?: string
}

export const SkillSquare = ({ children, icon, color }: Props) => {
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `linear-gradient(to bottom,transparent,${color})`,
      }}
    >
      <p>{children}</p>
      <div className={classes.iconWrapper}>
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
      </div>
    </div>
  )
}
