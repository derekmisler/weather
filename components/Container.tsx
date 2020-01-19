import styled from 'styled-components'
import { memo } from 'react'
import { LAYOUT } from 'styles'

const { spacing } = LAYOUT

const StyledContainer = styled.main`
  margin: 0;
  padding: ${spacing.medium};
  min-height: 100vh;
`

export const Container = memo(({ children }) => (
  <StyledContainer>{children}</StyledContainer>
))
