import { useEffect, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { RootState } from 'utils/reducers'
import { Error } from 'components/atoms/Typography'
import { LocationAutocomplete } from 'components/molecules/Forms'
import { getStation, getWeather } from 'utils/actions'

export const Weather = memo(() => {
  const { selection, properties, error } = useSelector((state: RootState) => state.weather)
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
    <>
      { error && <Error>{error}</Error> }
    </>
  )
})
