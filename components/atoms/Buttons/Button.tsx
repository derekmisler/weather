import styled, { css } from 'styled-components'
import { TYPOGRAPHY, LAYOUT, BUTTON_TEXT_STYLES } from 'styles'

const { baseFontSize } = TYPOGRAPHY

const { spacing, borderRadius, borderStyle, borderSize, mediaQueries } = LAYOUT

interface StyledButtonProps {
  accent?: boolean
  href?: string
  tab?: boolean
}

const tabStyle = css`
  border: none;
  border-radius: 0;
  border-bottom: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
`
const buttonStyle = css`
  border-radius: ${borderRadius};
  border: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
`

export const Button = styled.button.attrs<StyledButtonProps>(({ href }) => ({
  as: href ? 'a' : 'button'
}))<StyledButtonProps>`
  ${BUTTON_TEXT_STYLES}
  ${({ tab }) => tab ? tabStyle : buttonStyle}
  background-color: transparent;
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus,
  &:active {
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.background};
    background-color: ${({ theme }) => theme.linkHover};
    border-color: ${({ theme }) => theme.linkHover};
  }
`
