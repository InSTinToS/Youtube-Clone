import { FC } from 'react'

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.ico'
declare module '*.svg' {
  const value: string | FC
  export = value
}
