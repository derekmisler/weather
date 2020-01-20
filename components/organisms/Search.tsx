import { useEffect, memo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Row, Col } from 'components/atoms/Grid'
import { Heading, Text, Span, Link } from 'components/atoms/Typography'
import { RootState } from 'utils/reducers'
import { LocationAutocomplete } from 'components/molecules/Forms'
import { resetPlaces, currentPlace } from 'utils/actions'
import { Animated } from 'components/molecules/Animated'
import { Button } from 'components/atoms/Buttons'
import NearMeRoundedIcon from '@material-ui/icons/NearMeRounded'

export const Search = memo(() => {
  const { selection } = useSelector((state: RootState) => state.places)
  const { location } = selection || {}
  const router = useRouter()
  const dispatch = useDispatch()

  const [browserSupportsGeo, setBrowserSupportsGeo] = useState(false)
  const [searchIsActive, setSearchIsActive] = useState(!(router.query && router.query.lat && router.query.lng))

  useEffect(() => {
    dispatch(resetPlaces())
  }, [])

  useEffect(() => {
    setBrowserSupportsGeo(!!(navigator && navigator.geolocation))
  }, [navigator])

  useEffect(() => {
    if (location && location.lat && location.lng) {
      router.push({ pathname: '/', query: location })
      setSearchIsActive(false)
    }
  }, [location])

  useEffect(() => {
    setSearchIsActive(!(router.query && router.query.lat && router.query.lng))
  }, [router.query])

  const handleCurrentLocationClick = () => {
    if (browserSupportsGeo) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        dispatch(currentPlace({ lat: coords.latitude, lng: coords.longitude }))
      })
    }
  }
  if (!searchIsActive) return null
  return (
    <>
      <Animated delay={200} active={searchIsActive}>
        <Row columnsDesktop={5}>
          <Col rangeDesktop='2-4'>
            <LocationAutocomplete />
            { browserSupportsGeo && (
              <>
                <Text textAlign='center'><Span italic>or</Span></Text>
                <Button onClick={handleCurrentLocationClick}>Use My Location</Button>
              </>
            )}
          </Col>
        </Row>
      </Animated>
    </>
  )
})
