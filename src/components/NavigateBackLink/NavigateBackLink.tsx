import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavigateBackLink = () => {
  const router = useRouter()

  const handleClickBack = () => {
    router.back()
  }

  return (
    <Link href={''} onClick={handleClickBack}>
      <span aria-hidden='true'>{`<=== `}</span>
      back
    </Link>
  )
}
