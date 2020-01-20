import { SFC, memo } from 'react'
import { Animated } from 'components/molecules/Animated'
import { Heading, Span, Text } from 'components/atoms/Typography'
import { Weather } from 'components/atoms/Icons'

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
    <>
      <Animated delay={200} active={active}>
        <Heading textAlign='center' level={small ? 5 : 2}>
          {name}
          <br />
          <Weather forecast={shortForecast} />
        </Heading>
      </Animated>
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
          {temperature}&deg;{temperatureUnit}{temperatureTrend && ` and ${temperatureTrend}`}
        </Heading>
      </Animated>
      { !small && (
        <Animated delay={600} active={active}>
          <Text textAlign='center'>{detailedForecast}</Text>
        </Animated>
      )}
    </>
  )
})