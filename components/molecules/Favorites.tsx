import { SFC, memo } from 'react'
import styled from 'styled-components'
import { Heading, Link } from 'components/atoms/Typography'
import { useRouter } from 'next/router'
import { LAYOUT } from 'styles'
import { Row, Col } from 'components/atoms/Grid'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'utils/reducers'

const { spacing, borderSize, borderStyle } = LAYOUT

const StyledFavorites = styled.footer`
  padding: ${spacing.large};
  border-top: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.link}`};
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
    <Col>
      <Link small onClick={handleClick}>{title}</Link>
    </Col>
  )
})

export const Favorites = memo(() => {
  const router = useRouter()
  const favorites = useSelector((state: RootState) => state.favorites) || []
  if (!favorites.length) return <></>
  const selectFave = ({ lat, lng }) => {
    router.push({ pathname: '/', query: { lat, lng }})
  }
  return (
    <StyledFavorites>
      <Heading level={4}>Favorites</Heading>
      <Row columns={2} columnsDesktop={5}>
        { favorites.map(fave => (
          <Fave {...fave} key={fave.title} onClick={selectFave} />
        ))}
      </Row>
    </StyledFavorites>
  )
})
