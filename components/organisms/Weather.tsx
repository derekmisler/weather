import { SFC, useEffect, memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { RootState } from 'utils/reducers'
import { Row, Col } from 'components/atoms/Grid'
import { Text, Alert } from 'components/atoms/Typography'
import { LocationAutocomplete } from 'components/molecules/Forms'
import { getStation, getWeather, getAlerts } from 'utils/actions'
import { DayForecast } from 'components/molecules/DayForecast'
import { HourlyForecast } from 'components/molecules/HourlyForecast'
import { NextSeven } from 'components/molecules/NextSeven'
import { Button } from 'components/atoms/Buttons'
import { WEATHER_TABS } from 'constants/weather'
import { Header } from 'components/molecules/Header'

const Tab: SFC<{ title: string, id: string, onClick: Function, activeTab: string }> = memo(({ title, id, onClick, activeTab }) => {
  const handleClick = () => {
    onClick(id)
  }
  return <Col><Button tab disabled={activeTab === id} onClick={handleClick}>{title}</Button></Col>
})

export const Weather = memo(() => {
  const {
    selection,
    properties,
    forecastToday,
    forecastHourly = [],
    alerts
  } = useSelector((state: RootState) => state.weather)
  const { location } = selection || {}
  const [weatherProperties, setWeatherProperties] = useState({
    relativeLocation: { properties: { city: '', state: '' } },
    forecastZone: ''
  })
  const [activeTab, setActiveTab] = useState('today')
  const [weatherIsActive, setWeatherIsActive] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const { relativeLocation: { properties: { city = '', state = '' } = {} } = {} } = weatherProperties || {}
  const description = !!city && !!state ? `${city}, ${state}` : ''
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

  if (!weatherIsActive) return null

  return (
    <>
      <Header title={description}/>
      <Row columnsDesktop={2} padding='large' margin='large' gap='large'>
        {WEATHER_TABS.map(tab => <Tab {...tab} activeTab={activeTab} key={tab.id} onClick={handleTabClick} />)}
      </Row>
      { activeTab === 'today' && (
        <>
          <Row columnsDesktop={7} margin='large'>
            <Col rangeDesktop='3-5'>
              <DayForecast forecast={forecastToday} active={activeTab === 'today'} />
            </Col>
          </Row>
          <Row columns={3} columnsDesktop={12}>
            { forecastHourly.map((f, i) => (
              <HourlyForecast key={JSON.stringify(f)} maxHourlyTemp={maxHourlyTemp} forecast={f} active={activeTab === 'today'}  index={i}/>
            ))}
          </Row>
        </>
      )}
      { activeTab === 'nextSeven' && (
        <NextSeven active={activeTab === 'nextSeven'} />
      )}
      { alerts && <Alert>{alerts}</Alert>}
    </>
  )
})
