import styled from 'styled-components'
import { SFC, memo } from 'react'
import { Animated } from 'components/molecules/Animated'
import { Heading, Span, Text } from 'components/atoms/Typography'
import { Row, Col } from 'components/atoms/Grid'
import { blue, red, yellow, whiteDarkest, gray, orange } from 'styles'
import moment from 'moment-timezone'

const TempBarWrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
const TempBar = styled.div<{ height: number, color: string }>`
  height: ${({ height }) => `${height}%`};
  width: 50%;
  background-color: ${({ color }) => color};
`

export const HourlyForecast: SFC<{ forecast: any, active?: boolean, index: number, maxHourlyTemp: number }> = memo(({ maxHourlyTemp, forecast, active, index }) => {
  const {
    temperature,
    temperatureUnit,
    windSpeed,
    windDirection,
    endTime
  } = forecast || {}
  let color = whiteDarkest
  if (temperature <= 32) color = blue
  if (temperature >= 60) color = yellow
  if (temperature >= 70) color = orange
  if (temperature >= 90) color = red
  return (
      <Col>
        <Animated delay={50 * index} active={active}>
          <Text textAlign='center'>
            <Span small>{moment(endTime).format('hA')}</Span>
          </Text>
          <TempBarWrapper>
            <TempBar color={color} height={temperature / maxHourlyTemp * 100} />
          </TempBarWrapper>
          <Text textAlign='center'>
            <Span small bold>{temperature}&deg;{temperatureUnit}</Span>
          </Text>
          <Text textAlign='center'>
            <Span small>{windSpeed} {windDirection}</Span>
          </Text>
        </Animated>
      </Col>
  )
})
