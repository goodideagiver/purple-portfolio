import { MotionValue, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'

const defaultValidate = <T>(value: T): boolean => {
  const number = Number(value)
  if (number > 0.3) {
    return true
  }
  return false
}

export const useUserSelect = <T>(
  value: MotionValue<T>,
  validation: (value: T) => boolean = defaultValidate
) => {
  const [userSelect, setUserSelect] = useState<'auto' | 'none'>('auto')

  useMotionValueEvent(value, 'change', (latest) => {
    if (validation(latest)) {
      setUserSelect('auto')
    } else {
      setUserSelect('none')
    }
  })

  return userSelect
}
