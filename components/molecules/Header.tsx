import styled from 'styled-components'
import { SFC, memo } from 'react'
import { Animated } from 'components/molecules/Animated'
import { Heading, Span, Error } from 'components/atoms/Typography'
import { LAYOUT } from 'styles'

const StyledHeader = styled.header`
  margin-bottom: ${LAYOUT.spacing.large};
`

export const Header: SFC<{ title: string }> = memo(({ title }) => {
  return (
    <StyledHeader>
      <Animated delay={100}>
        <Heading textAlign='center' level={1}>
          <Span italic>{title}</Span>
        </Heading>
      </Animated>
    </StyledHeader>
  )
})
