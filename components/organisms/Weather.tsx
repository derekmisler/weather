import { SFC, useEffect, memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { RootState } from 'utils/reducers'
import { Row, Col } from 'components/atoms/Grid'
import { Heading, Alert } from 'components/atoms/Typography'
import { getStation, getWeather, getAlerts } from 'utils/actions'
import { DayForecast } from 'components/molecules/DayForecast'
import { HourlyForecast } from 'components/molecules/HourlyForecast'
import { NextSeven } from 'components/molecules/NextSeven'
import { Button } from 'components/atoms/Buttons'
import { WEATHER_TABS } from 'constants/weather'
import { Header } from 'components/molecules/Header'
import { Animated } from 'components/molecules/Animated'
import { AddToFavorites } from 'components/molecules/AddToFavorites'

const Tab: SFC<{ title: string, id: string, disabled: boolean, onClick: Function, activeTab: string }> = memo(({ title, id, disabled, onClick, activeTab }) => {
  const handleClick = () => {
    !disabled && onClick(id)
  }
  return <Col><Button tab disabled={disabled} selected={activeTab === id} onClick={handleClick}>{title}</Button></Col>
})

export const Weather = memo(() => {
  const {
    properties,
    forecastToday,
    forecastHourly = [],
    alerts,
    error,
    fetchingWeatherProperties
  } = useSelector((state: RootState) => state.weather)
  const { selection } = useSelector((state: RootState) => state.places)
  const { location, description } = selection || {}
  const [weatherProperties, setWeatherProperties] = useState({
    relativeLocation: { properties: { city: '', state: '' } },
    forecastZone: ''
  })
  const [activeTab, setActiveTab] = useState('today')
  const [weatherIsActive, setWeatherIsActive] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const { relativeLocation: { properties: { city = '', state = '' } = {} } = {} } = weatherProperties || {}
  const title = !!description ? description : `${city}, ${state}`
  const zoneID = (weatherProperties?.forecastZone || '').split('/').slice(-1)[0]
  const maxHourlyTemp = forecastHourly.map(h => Number(h.temperature)).sort((a, b) => b - a)[0]

  useEffect(() => {
    if (location && location.lat && location.lng) {
      router.replace({ pathname: '/', query: location })
    }
  }, [location])

  useEffect(() => {
    if (zoneID) dispatch(getAlerts(zoneID))
  }, [zoneID])

  useEffect(() => {
    const { lat, lng } = router.query
    const forecastID = !!(lat && lng) ? `${lat}-${lng}` : undefined
    setWeatherIsActive(!!forecastID)
    if (forecastID) {
      setWeatherProperties(properties[forecastID])
      if ((Object.values(properties[forecastID] || {}) || []).length) {
        const { forecast, forecastHourly } = properties[forecastID]
        if (forecast) {
          dispatch(getWeather(forecast, 'day'))
        }
        if (forecastHourly) {
          dispatch(getWeather(forecastHourly, 'hourly'))
        }
      } else {
        dispatch(getStation({ lat, lng }))
      }
    }
  }, [router.query, properties])

  const handleTabClick = tabId => {
    setActiveTab(tabId)
  }

  const shouldShowAlerts = alerts && alerts.length > 0

  if (!weatherIsActive) return null

  return (
    <>
      { fetchingWeatherProperties
        ? <Heading level={2} textAlign='center'>Loading data...</Heading>
        : (
          <Header title={title}>
            {error 
              ? <Alert>{error}</Alert>
              : (
                <AddToFavorites favorite={{
                  title,
                  location: { lat: router.query.lat, lng: router.query.lng }
                }} />
              )
            }
          </Header>
        )
      }
      <Row columnsDesktop={3} padding='large' margin='large' gap='large'>
        {WEATHER_TABS.map(({ title, id, disabled }) => {
          const realTitle = title(!!(shouldShowAlerts && alerts.length))
          const realDisabled = disabled(!shouldShowAlerts)
          return (
            <Animated key={id}>
              <Tab disabled={realDisabled} id={id} title={realTitle} activeTab={activeTab} onClick={handleTabClick} />
            </Animated>
          )
        })}
      </Row>
      { activeTab === 'today' && (
        <>
          <DayForecast forecast={forecastToday} active={activeTab === 'today'} />
          <Row columns={4} columnsDesktop={12}>
            { forecastHourly.map((f, i) => (
              <HourlyForecast key={JSON.stringify(f)} maxHourlyTemp={maxHourlyTemp} forecast={f} active={activeTab === 'today'}  index={i}/>
            ))}
          </Row>
        </>
      )}
      { activeTab === 'nextSeven' && (
        <NextSeven active={activeTab === 'nextSeven'} />
      )}
      { activeTab === 'alerts' && shouldShowAlerts && (
        alerts.map(a => <Alert>{a}</Alert>)
      )}
    </>
  )
})
