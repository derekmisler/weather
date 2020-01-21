import { SFC, memo } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'components/atoms/Grid'
import { RootState } from 'utils/reducers'
import { DayForecast } from 'components/molecules/DayForecast'

export const NextSeven: SFC<{ active?: boolean }> = memo(({ active }) => {
  const { forecastFuture } = useSelector((state: RootState) => state.weather)
  const [first] = forecastFuture
  const nextSevenDays = forecastFuture.filter(f => f.isDaytime)
  return (
    <Row columns={2} columnsDesktop={7} gap='large' vAlign='center'>
      {
        nextSevenDays.map(f => (
          <Col key={f.detailedForecast}>
            <DayForecast small forecast={f} active={active} />
          </Col>
        ))
      }
    </Row>
  )
})
