import { GetStaticProps } from 'next'
import { HeadSeo } from '../../src/components/HeadSeo/HeadSeo'
import { TilIndex } from '../../src/components/TilIndex/TilIndex'

type Props = {
  postsPaths: {
    url: string
    title: string
  }[]
}

const til = ({ postsPaths }: Props) => {
  return (
    <>
      <HeadSeo
        meta={{
          title: 'TIL',
          description:
            'Today I Learned - a collection of small things I learned',
          image: 'https://i.imgur.com/4Z5j0Zm.png',
        }}
      />
      <TilIndex links={postsPaths} />
    </>
  )
}
export default til

export const getStaticProps: GetStaticProps = async () => {
  const fs = require('fs')
  const files: string[] = fs.readdirSync('pages/til')
  const filesWithoutIndex = files.filter((file) => file !== 'index.tsx')
  const filesWithTitles = filesWithoutIndex.map(async (file) => {
    const importedFile = await import(`../../pages/til/${file}`)
    const url = file.replace(/\..*/, '')
    const title = importedFile.meta?.title || url
    return { url, title }
  })

  return {
    props: {
      postsPaths: await Promise.all(filesWithTitles),
    },
  }
}
