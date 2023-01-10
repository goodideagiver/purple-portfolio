import classes from './SpacedWord.module.scss'

type Props = {
  word: string
  isHovered: boolean
}

const positionMultiplier = 60
const rotationMultiplier = 30

export const SpacedWord = ({ word, isHovered }: Props) => {
  const wordInSpans = word.split('').map((letter, index) => {
    const style = isHovered
      ? {
          transform: `translate(${
            Math.random() * positionMultiplier - positionMultiplier / 2
          }px, ${
            Math.random() * positionMultiplier - positionMultiplier / 2
          }px) rotate(${
            Math.random() * rotationMultiplier - rotationMultiplier / 2
          }deg)`,
        }
      : {}

    const hoverProp = isHovered ? { 'data-hover': '' } : {}
    return (
      <span
        {...hoverProp}
        className={classes.letter}
        key={letter + index}
        style={style}
      >
        {letter}
      </span>
    )
  })

  return <div className={classes.root}>{wordInSpans}</div>
}
