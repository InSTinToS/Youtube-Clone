import { useEffect, useState } from 'react'

interface WindowDimension {
  innerWidth?: number
  innerHeight?: number
}

const useWindowDimensions = (): WindowDimension => {
  const [dimensions, setDimensions] = useState({
    innerHeight: undefined,
    innerWidth: undefined
  })

  useEffect(() => {
    const resize = () => {
      setDimensions({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth
      })
    }

    resize()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return dimensions
}

export default useWindowDimensions
