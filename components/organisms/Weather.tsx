import { SFC, useEffect, memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { RootState } from 'utils/reducers'
import { Row, Col } from 'components/atoms/Grid'
import { Text } from 'components/atoms/Typography'
import { LocationAutocomplete } from 'components/molecules/Forms'
import { getStation, getWeather } from 'utils/actions'
import { DayForecast } from 'components/molecules/DayForecast'
import { NextSeven } from 'components/molecules/NextSeven'
import { Button } from 'components/atoms/Buttons'
import { WEATHER_TABS } from 'constants/weather'

const Tab: SFC<{ title: string, id: string, onClick: Function }> = memo(({ title, id, onClick }) => {
  const handleClick = () => {
    onClick(id)
  }
  return <Col><Button tab onClick={handleClick}>{title}</Button></Col>
})

export const Weather = memo(() => {
  const { selection, properties, forecastToday } = useSelector((state: RootState) => state.weather)
  const { location, description } = selection || {}
  const [activeTab, setActiveTab] = useState('today')
  const [weatherIsActive, setWeatherIsActive] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()

  useEffect(() => {
    if (location && location.lat && location.lng) {
      router.replace({ pathname: '/', query: location })
    }
  }, [location])

  useEffect(() => {
    const { lat, lng } = router.query
    const forecastID = !!(lat && lng) ? `${lat}-${lng}` : undefined
    setWeatherIsActive(!!forecastID)
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

  const handleTabClick = tabId => {
    setActiveTab(tabId)
  }

  if (!weatherIsActive) return null

  return (
    <>
      <Row columnsDesktop={2} padding='large' margin='large' gap='large'>
        {WEATHER_TABS.map(tab => <Tab {...tab} key={tab.id} onClick={handleTabClick} />)}
      </Row>
      <Row>
        <Col row>
          <Text>{description}</Text>
          { activeTab === 'today' && <DayForecast forecast={forecastToday} active={activeTab === 'today'} /> }
          { activeTab === 'nextSeven' && <NextSeven active={activeTab === 'nextSeven'} /> }
        </Col>
      </Row>
    </>
  )
})
