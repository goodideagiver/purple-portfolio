import { Props as PortfolioItemType } from './PortfolioItem/PortfolioItem'

// 53 X 7 - commit graph size
export const portfolioItems: PortfolioItemType[] = [
  {
    title: 'Bewebdev.tech',
    description: `Bewebdev.tech is a project that offers a collection of useful learning resources for web developers. It's built using the Astro framework, the React JavaScript library, and SCSS for styling. The website provides a centralized location for web developers to find information, tutorials, and other resources to improve their skills. The focus is on delivering high-quality content in a user-friendly interface to make it easy for developers to find what they're looking for and get started with learning.
`,
    image: '/bewebdev.tech_.png',
    link: 'https://bewebdev.tech',
  },
  {
    title: 'How to ask good questions',
    description: `This app was created in order to help people on a discord server to ask better questions.

When creating new projects I always select new technologies that I don't know yet to learn them in practice. This time I wanted to check out Vite and testing library for React. I also wanted to try out i18next for translations, because this app was supposed to be available for people that speak different languages.

During its development I watched a tutorial React Testing Library Tutorial by The Net Ninja and implemented tests for the app. I am thankful that vitest supports jest and chai assertions out of the box and I could watch the tutorial for Jest and just adjust minor things to make it compatibile with vitest.

`,
    image: '/example.jpg',
    link: 'https://goodideagiver.github.io/how-to-ask-good-questions/',
  },
]
