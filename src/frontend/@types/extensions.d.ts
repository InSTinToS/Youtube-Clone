import { FC } from 'react'

declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.ico'

declare module '*.png' {
  const value: string
  export = value
}

declare module '*.svg' {
  const value: string | FC
  export = value
}
