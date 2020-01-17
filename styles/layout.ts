import { HTMLProps } from 'react'

export type SmMdLgSizes = 'small' | 'medium' | 'large'

export interface SmMdLgTypes {
  small: string
  medium: string
  large: string
}

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

export interface LayoutTypes {
  borderRadius: string
  borderSize: string
  borderStyle: string
  transition: string
  mediaQueries: {
    mobile: string
    desktop: string
    fullHeight: string
  }
  dropShadow: SmMdLgTypes
  spacing: SmMdLgTypes
}

export const breakpoints = {
  mobile: '64em',
  desktop: '64.063em'
}

export const transitionDefaults = {
  durationFast: '230ms',
  duration: '500ms',
  property: 'all',
  timing: 'cubic-bezier(.68, -.55, .265, 1.55)'
}

export const LAYOUT_DEFAULTS: LayoutTypes = {
  borderRadius: '50%',
  borderSize: '.85rem',
  borderStyle: 'solid',
  transition: `${transitionDefaults.duration} ${transitionDefaults.property} ${transitionDefaults.timing}`,
  mediaQueries: {
    mobile: `screen and (max-width: ${breakpoints.mobile})`,
    desktop: `screen and (min-width: ${breakpoints.desktop})`,
    fullHeight: `screen and (max-height: 100vh)`
  },
  dropShadow: {
    small: '.1rem',
    medium: '.2rem',
    large: '.4rem'
  },
  spacing: {
    small: '.5rem',
    medium: '1.25rem',
    large: '2.75rem'
  }
}
