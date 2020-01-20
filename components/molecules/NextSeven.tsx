import { SFC, memo } from 'react'
import { useSelector } from 'react-redux'
import { Row, Col } from 'components/atoms/Grid'
import { RootState } from 'utils/reducers'
import { Today } from 'components/molecules/Today'

export const NextSeven: SFC<{ active?: boolean }> = memo(({ active }) => {
  const { forecastFuture } = useSelector((state: RootState) => state.weather)
  const [first] = forecastFuture
  return (
    <Row columns={2} columnsDesktop={7}>
      {
        forecastFuture.map((f, i) => {
          if (first.isDaytime && i % 2 === 0) {
            return (
              <Col key={f.detailedForecast}>
                <Today small forecast={f} active={active} />
              </Col>
            )
          }
          return null
        })
      }
    </Row>
  )
})
