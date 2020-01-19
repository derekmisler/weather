import { HTMLProps } from 'react'

export type SmMdLgSizes = 'small' | 'medium' | 'large'

export interface DesktopMobile {
  desktop: string
  mobile: string
}

export interface StyledComponentProps extends HTMLProps<HTMLDivElement> {
  as?: any
  ref?: any
}

export type FlexAlignment =
  'flex-start'
  | 'flex-end'
  | 'center'
  | 'stretch'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'baseline'

export const BASE_MEASURE = 16

export const BREAKPOINTS = {
  mobile: '64em',
  desktop: '64.063em'
}

export const TRANSITIONS = {
  durationFast: '500ms',
  duration: '750ms',
  durationSlow: '1500ms',
  property: 'all',
  timing: 'cubic-bezier(.68, -.55, .265, 1.55)'
}
