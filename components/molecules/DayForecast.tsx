import { SFC, memo } from 'react'
import { Animated } from 'components/molecules/Animated'
import { Heading, Span, Text } from 'components/atoms/Typography'
import { Weather } from 'components/atoms/Icons'
import { Row, Col } from 'components/atoms/Grid'

export const DayForecast: SFC<{ active?: boolean, forecast: any, small?: boolean }> = memo(({ active, forecast, small }) => {
  const {
    name,
    startTime,
    shortForecast = '',
    detailedForecast,
    temperature,
    temperatureUnit,
    temperatureTrend,
    isDaytime
  } = forecast || {}
  return (
    <Row columnsDesktop={12} margin='large' gap='large' vAlign='center'>
      <Col row>
        <Animated delay={200} active={active}>
          <Heading textAlign='center' level={small ? 5 : 2}>
            {name}
          </Heading>
        </Animated>
      </Col>
      <Col rangeDesktop={5} textAlign='center'>
        <Animated delay={300} active={active}>
          <Weather forecast={shortForecast} />
          {
            !small
            ? (
              <Heading textAlign='center' level={3}>{shortForecast}</Heading>
            ) : (
              <Text textAlign='center'><Span small>{shortForecast}</Span></Text>
            )
          }
        </Animated>
      </Col>
      <Col rangeDesktop={7}>
        <Animated delay={500} active={active}>
          <Heading level={small ? 5 : 4}>
            {temperature}&deg;{temperatureUnit}{temperatureTrend && ` and ${temperatureTrend}`}
          </Heading>
        </Animated>
        { !small && (
          <Animated delay={600} active={active}>
            <Text>{detailedForecast}</Text>
          </Animated>
        )}
      </Col>
    </Row>
  )
})
