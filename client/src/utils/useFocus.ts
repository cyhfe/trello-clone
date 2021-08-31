import { useRef, useEffect } from 'react'

function useFocus() {
  const ref = useRef<HTMLInputElement>(null)
  useEffect(() => {
    ref.current?.focus()
  }, [])
  return ref
}

export { useFocus }
