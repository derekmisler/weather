import { SFC, useEffect, memo, useState } from 'react'
import { Text, Alert, Link } from 'components/atoms/Typography'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'utils/reducers'
import { Star } from 'components/atoms/Icons'
import { Row } from 'components/atoms/Grid'
import { Animated } from 'components/molecules/Animated'
import { addToFavorite } from 'utils/actions'

export const AddToFavorites: SFC<{ favorite: any }> = memo(({ favorite }) => {
  const { favorites = [] } = useSelector((state: RootState) => state.places)
  const dispatch = useDispatch()
  const favoriteID = `${favorite.lat}-${favorite.lng}`
  const isFavorite = favorites.find(f => f.id === favoriteID)
  const buttonText = isFavorite
  ? 'Remove from favorites'
  : 'Add to favorites'
  const handleClick = () => {
    dispatch(addToFavorite({ ...favorite, id: favoriteID }, !isFavorite))
  }
  return (
    <Animated delay={700}>
      <Row vAlign='center' hAlign='center'>
        <Link small onClick={handleClick}><Star active={isFavorite} />&nbsp;{buttonText}</Link>
      </Row>
    </Animated>
  )
})
