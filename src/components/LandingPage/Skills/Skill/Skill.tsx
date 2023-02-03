import classes from './Skill.module.scss'
import { forwardRef } from 'react'

type Props = {
  skill: { text: string; icon?: string; color?: string }
}

export const Skill = forwardRef<HTMLDivElement, Props>(function Skill(
  { skill },
  ref
) {
  const { text, color, icon } = skill
  return (
    <div
      ref={ref}
      style={{
        backgroundImage: `linear-gradient(45deg, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent)`,
        boxShadow: `0 0 0 0.5rem ${color} inset`,
      }}
      className={classes.root}
    >
      <p className={classes.text}>{text}</p>
    </div>
  )
})
