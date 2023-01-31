import Image from 'next/image'
import { ReactNode, useState } from 'react'
import classes from './OldNotepad.module.scss'
import { motion } from 'framer-motion'

type Props = {
  children: ReactNode
  title: string | ReactNode
}

export const OldNotepad = ({ children, title }: Props) => {
  const [maximized, setMaximized] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [closed, setClosed] = useState(false)

  const maximizeClickHandler = () => {
    if (minimized) {
      setMinimized(false)
    }
    setMaximized((s) => !s)
  }

  const minimizeClickHandler = () => {
    if (maximized) {
      setMaximized(false)
    }
    setMinimized((s) => !s)
  }

  const closeClickHandler = () => {
    setMaximized(false)
    setMinimized(false)
    setClosed(true)
  }

  return (
    <motion.div
      className={classes.root}
      layout
      data-isopen={maximized}
      data-isminimized={minimized}
      data-isclosed={closed}
    >
      <button onClick={() => setClosed(false)} className={classes.launch}>
        <div>
          <Image src='/purple.png' width={50} height={50} alt='' />
          <p>{title}.exe</p>
        </div>
      </button>
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
          <button onClick={minimizeClickHandler} className={classes.minimize} />
          <button onClick={maximizeClickHandler} className={classes.maximize} />
          <button onClick={closeClickHandler} className={classes.close} />
        </div>
      </div>
      <div className={classes.toolbar}>File Edit Format Help</div>
      <div className={classes.content}>{children}</div>
    </motion.div>
  )
}
