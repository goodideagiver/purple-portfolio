import { GetStaticProps } from 'next'
import Link from 'next/link'

type Props = {
  postsPaths: string[]
}

const til = ({ postsPaths }: Props) => {
  return (
    <ul>
      {postsPaths.map((el, index) => (
        <li key={index + el}>
          <Link href={'/til/' + el}>{el}</Link>
        </li>
      ))}
    </ul>
  )
}
export default til

export const getStaticProps: GetStaticProps = async () => {
  const fs = require('fs')
  const files: string[] = fs.readdirSync('pages/til')
  const filesWithoutIndex = files.filter((file) => file !== 'index.tsx')

  return {
    props: {
      postsPaths: filesWithoutIndex.map((el) => el.replace(/\..*/, '')),
    },
  }
}
