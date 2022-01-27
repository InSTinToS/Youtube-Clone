import {
  AnimatePresence,
  AnimatePresenceProps,
  HTMLMotionProps,
  motion,
  Transition,
  Variants
} from 'framer-motion'
import React, { forwardRef, ReactNode } from 'react'

export interface PresenceProps extends HTMLMotionProps<'div'> {
  condition: boolean
  children: ReactNode
  presenceProps?: AnimatePresenceProps
  withPresence?: boolean
}

const defaultTransition: Transition = {
  type: 'tween',
  duration: 0.3
}

const defaultAnimation: Variants = {
  exit: { opacity: 0 },
  enter: { opacity: 1 },
  initial: { opacity: 0 }
}

const Presence = forwardRef<any, PresenceProps>(
  (
    {
      children,
      condition,
      presenceProps,
      withPresence = true,
      exit = 'exit',
      animate = 'enter',
      initial = 'initial',
      ...props
    },
    ref
  ) =>
    withPresence ? (
      <AnimatePresence {...presenceProps}>
        {condition && (
          <motion.div
            ref={ref}
            exit={exit}
            animate={animate}
            initial={initial}
            className='Presence'
            variants={defaultAnimation}
            transition={defaultTransition}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    ) : (
      <>{children}</>
    )
)

export default Presence
