import { RefObject, FormEvent, FC, useEffect, useRef, memo } from 'react'
import styled from 'styled-components'
import { Text } from 'components/Typography'
import { LAYOUT, DEFAULT_TEXT_STYLES, red, green } from 'styles'

const {
  borderSize,
  borderStyle,
  spacing
} = LAYOUT

interface InputProps {
  label?: string
  id: string
  onChange: Function
  defaultValue?: string
  autoFocus?: boolean
}

const InputWrapper = styled.div``

const TextInput = styled.input<{ valid?: boolean, invalid?: boolean }>`
  ${DEFAULT_TEXT_STYLES}
  padding: ${spacing.small};
  margin: 0 ${spacing.small};
  position: relative;
  appearance: none;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom-style: ${borderStyle};
  border-bottom-width: ${borderSize};
  border-bottom-color: ${({ valid, invalid, theme }) => {
    if (valid) return green
    if (invalid) return red
    return theme.border
  }};
  overflow: hidden;
  &:hover,
  &:focus {
    border-bottom-color: ${({ theme }) => theme.link};
  }
`

export const Input: FC<InputProps> = memo(({
  label,
  onChange,
  defaultValue,
  id,
  autoFocus
}) => {
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { currentTarget: { value = '' } = {} } = e || {}
    onChange(value)
  }
  const inputRef: RefObject<HTMLInputElement> = useRef(null)
  useEffect(() => {
    if (autoFocus) {
      inputRef?.current?.focus()
    }
  }, [])
  return (
    <InputWrapper>
      { label && <Text as='label' htmlFor={id}>{label}</Text> }
      <TextInput ref={inputRef} id={id} type='text' defaultValue={defaultValue} onChange={handleChange} />
    </InputWrapper>
  )
})
