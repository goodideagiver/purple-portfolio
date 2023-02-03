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
        backgroundColor: color + '15',
        boxShadow: `0 0 0 1px ${color}30 inset,inset 0 -30px 50px -30px ${color}`,
      }}
      className={classes.root}
    >
      <p className={classes.text}>{text}</p>
    </div>
  )
})
