import styled from 'styled-components'
import { useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { RootState } from 'utils/reducers'
import { LocationAutocomplete } from 'components/molecules/Forms'
import { getStation, getWeather } from 'utils/actions'
import { Today } from 'components/molecules/Today'

const StyledWeatherWrapper = styled.div`
  position: absolute;
`

export const Weather = memo(() => {
  const { selection, properties } = useSelector((state: RootState) => state.weather)
  const dispatch = useDispatch()
  const router = useRouter()
  const { lat, lng } = router.query
  const forecastID = !!(lat && lng) ? `${lat}-${lng}` : undefined

  useEffect(() => {
    if (selection && selection.lat && selection.lng) {
      router.replace({ pathname: '/', query: selection })
    }
  }, [selection])

  useEffect(() => {
    if (forecastID) {
      if ((Object.values(properties[forecastID] || {}) || []).length) {
        const { forecast } = properties[forecastID]
        if (forecast) {
          dispatch(getWeather(forecast))
        }
      } else {
        dispatch(getStation({ lat, lng }))
      }
    }
  }, [router.query, properties])

  return (
    <StyledWeatherWrapper>
      <Today active={!!forecastID} />
    </StyledWeatherWrapper>
  )
})
