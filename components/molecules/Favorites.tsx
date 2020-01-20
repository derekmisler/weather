import { memo } from 'react'
import styled from 'styled-components'
import { Text } from 'components/atoms/Typography'

const StyledFavorites = styled.div``

export const Favorites = memo(() => {
  return (
    <StyledFavorites>
      <Text>Footer</Text>
    </StyledFavorites>
  )
})
