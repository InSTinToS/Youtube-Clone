import {
  AnimatePresence,
  AnimatePresenceProps,
  HTMLMotionProps,
  motion
} from 'framer-motion'
import React, { forwardRef, ReactNode } from 'react'

export interface PresenceProps extends HTMLMotionProps<'div'> {
  condition: boolean
  children: ReactNode
  presenceProps?: AnimatePresenceProps
  withPresence?: boolean
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
