import { HTMLProps } from 'react'
import styled from 'styled-components'
import { DEFAULT_TEXT_STYLES } from 'styles'

export const Link = styled.a<HTMLProps<HTMLLinkElement>>`
  ${DEFAULT_TEXT_STYLES}
  color: ${({ theme }) => theme.link};
  text-decoration: none;
  font-style: italic;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.linkHover};
  }
`
