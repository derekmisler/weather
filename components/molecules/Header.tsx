import styled from 'styled-components'
import { SFC, memo } from 'react'
import { Heading, Span } from 'components/atoms/Typography'
import { LAYOUT } from 'styles'

const StyledHeader = styled.header`
  margin-bottom: ${LAYOUT.spacing.large};
`

export const Header: SFC<{ title: string, children?: any }> = memo(({ title, children }) => {
  return (
    <StyledHeader>
      <Heading textAlign='center' level={1}>
        <Span italic>{title}</Span>
      </Heading>
      {children}
    </StyledHeader>
  )
})
