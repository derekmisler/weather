import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Animated } from 'components/molecules/Animated'
import { Heading, Span, Error } from 'components/atoms/Typography'
import { RootState } from 'utils/reducers'

export const Header = memo(() => {
  const { error } = useSelector((state: RootState) => state.weather)

  return (
    <header>
      <Animated delay={100}>
        <Heading textAlign='center' level={1}>
          { error
            ? <Error>{error}</Error>
            : <Span italic>Whatever the Weather</Span>
          }
        </Heading>
      </Animated>
    </header>
  )
})
