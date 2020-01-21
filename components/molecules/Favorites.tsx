import { SFC, memo } from 'react'
import styled from 'styled-components'
import { Heading, Link } from 'components/atoms/Typography'
import { useRouter } from 'next/router'
import { LAYOUT } from 'styles'
import { Row, Col } from 'components/atoms/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'utils/reducers'

const { spacing, borderSize, borderStyle, dropShadow } = LAYOUT

const StyledFavorites = styled.div`
  padding: ${spacing.small};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.background};
  border-top: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
  box-shadow: ${({ theme }) => `0 -${dropShadow.small} ${dropShadow.large} ${theme.shadow}`};
`

const Fave: SFC<{
  onClick: Function,
  title: string,
  location: {
    lat: string,
    lng: string
  }
}> = memo(({ location, title, onClick }) => {
  const handleClick = () => {
    onClick({ ...location })
  }
  return (
    <Link small onClick={handleClick}>{title}</Link>
  )
})

export const Favorites = memo(() => {
  const router = useRouter()
  const favorites = useSelector((state: RootState) => state.favorites) || {}
  const favArray: any[] = Object.values(favorites).filter(Boolean)
  const [first] = favArray
  if (!first.id) return null
  const selectFave = ({ lat, lng }) => {
    router.replace({ pathname: '/', query: { lat, lng }})
  }
  return (
    <StyledFavorites>
      { favArray.map(fave => (
        <Fave {...fave} key={JSON.stringify(fave)} onClick={selectFave} />
      ))}
    </StyledFavorites>
  )
})
