import styled from 'styled-components'
import { BUTTON_TEXT_STYLES } from 'styles'

export const Link = styled.a`
  ${BUTTON_TEXT_STYLES}
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.linkHover};
  }
`
