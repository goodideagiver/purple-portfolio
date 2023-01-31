import Image from 'next/image'
import { ReactNode } from 'react'
import classes from './OldNotepad.module.scss'

type Props = {
  children: ReactNode
  title: string | ReactNode
}

export const OldNotepad = ({ children, title }: Props) => {
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <div className={classes.name}>
          <Image
            src='/purple.png'
            width={20}
            height={20}
            alt=''
            aria-hidden='true'
          />
          <h3>{title} - Project</h3>
        </div>
        <div className={classes.buttons}>
          <button className={classes.minimize} />
          <button className={classes.maximize} />
          <button className={classes.close} />
        </div>
      </div>
      <div className={classes.toolbar}>File Edit Format Help</div>
      <div className={classes.content}>{children}</div>
    </div>
  )
}
