import { HTMLProps } from 'react'
import styled from 'styled-components'
import { BUTTON_TEXT_STYLES } from 'styles'

export const Error = styled.p`
  ${BUTTON_TEXT_STYLES}
  color: ${({ theme }) => theme.error};
`
