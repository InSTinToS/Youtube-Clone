import { useEffect, useState } from 'react'

interface WindowDimension {
  innerWidth?: number
  innerHeight?: number
}

const debounce = <Args, Return>(func: (args: Args) => Return, wait: number) => {
  let timeout: NodeJS.Timeout

  return (args: Args) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      clearTimeout(timeout)

      func(args)
    }, wait)
  }
}

const useWindowDimensions = (): WindowDimension => {
  const [dimensions, setDimensions] = useState({
    innerHeight: undefined,
    innerWidth: window.innerWidth
  })

  useEffect(() => {
    const resize = () => {
      setDimensions({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth
      })
    }

    resize()

    window.addEventListener(
      'resize',
      debounce<WindowEventMap['resize'], void>(resize, 300)
    )

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return dimensions
}

export default useWindowDimensions
