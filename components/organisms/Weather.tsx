import { SFC, useEffect, memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { RootState } from 'utils/reducers'
import { Row, Col } from 'components/atoms/Grid'
import { LocationAutocomplete } from 'components/molecules/Forms'
import { getStation, getWeather } from 'utils/actions'
import { Today } from 'components/molecules/Today'
import { NextSeven } from 'components/molecules/NextSeven'
import { Button } from 'components/atoms/Buttons'

const Tab: SFC<{ title: string, id: string, onClick: Function }> = memo(({ title, id, onClick }) => {
  const handleClick = () => {
    onClick(id)
  }
  return <Col><Button tab onClick={handleClick}>{title}</Button></Col>
})

export const Weather = memo(() => {
  const { selection, properties, forecastToday } = useSelector((state: RootState) => state.weather)
  const [activeTab, setActiveTab] = useState('today')
  const [weatherIsActive, setWeatherIsActive] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const { lat, lng } = router.query
  const tabs = [
    { title: 'Today', id: 'today' },
    { title: 'Next 7 Days', id: 'nextSeven' }
  ]

  useEffect(() => {
    if (selection && selection.lat && selection.lng) {
      router.replace({ pathname: '/', query: selection })
    }
  }, [selection])

  useEffect(() => {
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
      <Row columnsDesktop={2} gap='large'>
        {tabs.map(tab => <Tab {...tab} key={tab.id} onClick={handleTabClick} />)}
      </Row>
      <Row>
        <Col row>
          { activeTab === 'today' && <Today forecast={forecastToday} active={activeTab === 'today'} /> }
          { activeTab === 'nextSeven' && <NextSeven active={activeTab === 'nextSeven'} /> }
        </Col>
      </Row>
    </>
  )
})
