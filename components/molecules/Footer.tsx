import { memo } from 'react'
import styled from 'styled-components'
import { Text } from 'components/atoms/Typography'

const StyledFooter = styled.footer``

export const Footer = memo(() => {
  return (
    <StyledFooter>
      <Text>Footer</Text>
    </StyledFooter>
  )
})
