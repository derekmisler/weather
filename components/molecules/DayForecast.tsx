import { SFC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Animated } from 'components/molecules/Animated'
import { Heading, Span, Text } from 'components/atoms/Typography'
import { Row, Col } from 'components/atoms/Grid'
import { useRouter } from 'next/router'
import { Link } from 'components/atoms/Typography'
import { Weather } from 'components/atoms/Icons'
import { RootState } from 'utils/reducers'
import { useTheme } from 'utils/useTheme'

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
    <Row margin='large' columnsDesktop={small ? 1 : 7}>
      <Col row>
        <Animated delay={200} active={active}>
          <Heading textAlign='center' level={small ? 5 : 2}>
            {name}
            <br />
            <Weather forecast={shortForecast} />
          </Heading>
        </Animated>
      </Col>
      <Col rangeDesktop={small ? undefined : '3-5'}>
        <Animated delay={300} active={active}>
          {
            !small
            ? (
              <Heading textAlign='center' level={3}>{shortForecast}</Heading>
            ) : (
              <Text textAlign='center'><Span small>{shortForecast}</Span></Text>
            )
          }
        </Animated>
        <Animated delay={500} active={active}>
          <Heading textAlign='center' level={small ? 5 : 4}>
            {temperature}&deg; {temperatureUnit}{temperatureTrend && ` and ${temperatureTrend}`}
          </Heading>
        </Animated>
        { !small && (
          <Animated delay={600} active={active}>
            <Text textAlign='center'>{detailedForecast}</Text>
          </Animated>
        )}
      </Col>
    </Row>
  )
})
