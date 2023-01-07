import classes from './SpacedWord.module.scss'

type Props = {
  word: string
}

export const SpacedWord = ({ word }: Props) => {
  const wordInSpans = word
    .split('')
    .map((letter, index) => <span key={letter + index}>{letter}</span>)

  return <div className={classes.root}>{wordInSpans}</div>
}
