import { memo } from 'react'
import { Animated } from 'components/Animated'
import { Heading, Span } from 'components/Typography'

export const Header = memo(() => {
  return (
    <header>
      <Animated delay={100}>
        <Heading level={1}>
          <Span italic>Whatever the Weather</Span>
        </Heading>
      </Animated>
    </header>
  )
})
