import { Inter } from '@next/font/google'
import { LandingPage } from '../src/components/LandingPage/LandingPage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <LandingPage />
}
