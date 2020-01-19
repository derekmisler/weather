import { BREAKPOINTS, TRANSITIONS } from './variables'

export const LAYOUT = {
  singleLineComponentHeight: '2rem',
  borderRadius: `calc(1rem / 2)`,
  borderSize: '.5rem',
  borderStyle: 'solid',
  transitionDefaults: TRANSITIONS,
  transition: `${TRANSITIONS.duration} ${TRANSITIONS.property} ${TRANSITIONS.timing}`,
  mediaQueries: {
    mobile: `screen and (max-width: ${BREAKPOINTS.mobile})`,
    desktop: `screen and (min-width: ${BREAKPOINTS.desktop})`,
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
