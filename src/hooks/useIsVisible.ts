import { RefObject, useEffect, useState } from 'react'

export const useIsVisible = (ref: RefObject) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.8,
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [ref])

  return isVisible
}
