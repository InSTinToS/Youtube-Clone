import { Container } from './styles'

import { HTMLMotionProps, Variant } from 'framer-motion'
import React from 'react'

export type ButtonVariants = 'success' | 'failed' | 'default'

type ButtonAnimation = {
  [key in ButtonVariants]: Variant
}

interface Props extends HTMLMotionProps<'button'> {
  animateVariant?: keyof ButtonAnimation
}

const buttonAnimation: ButtonAnimation = {
  default: { backgroundColor: '#aa4eff' },
  failed: { backgroundColor: ['#aa4eff', '#f00', '#aa4eff'] },
  success: { backgroundColor: ['#aa4eff', '#0f0', '#aa4eff'] }
}

const Button = ({ animateVariant = 'default', children }: Props) => (
  <Container
    initial='default'
    animate={animateVariant}
    variants={buttonAnimation}
  >
    {children}
  </Container>
)

export default Button
