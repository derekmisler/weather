import { SFC, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Animated } from 'components/molecules/Animated'
import { Heading, Span, Text } from 'components/atoms/Typography'
import { Row, Col } from 'components/atoms/Grid'
import { useRouter } from 'next/router'
import { Link } from 'components/atoms/Typography'
import { TYPOGRAPHY } from 'styles'
import { RootState } from 'utils/reducers'
import { useTheme } from 'utils/useTheme'
import moment from 'moment-timezone'
import FilterDramaRoundedIcon from '@material-ui/icons/FilterDramaRounded'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'

export const Today: SFC<{ active?: boolean, forecast: any, small?: boolean }> = memo(({ active, forecast, small }) => {
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

  const isCloudy = shortForecast.toLowerCase().indexOf('cloudy') > -1

  return (
    <Row columnsDesktop={7}>
      <Col rangeDesktop='3-5'>
        <Animated delay={200} active={active}>
          <Heading textAlign='center' level={small ? 5 : 2}>
            {moment(startTime).format('dddd')}
            <br />
            {
              isCloudy
              ? <FilterDramaRoundedIcon style={{ fontSize: TYPOGRAPHY.iconSize }} />
              : <WbSunnyRoundedIcon style={{ fontSize: TYPOGRAPHY.iconSize }} />
            }
          </Heading>
        </Animated>
        <Animated delay={300} active={active}>
          <Heading textAlign='center' level={small ? 6 : 3}>
            {shortForecast}
          </Heading>
        </Animated>
        <Animated delay={500} active={active}>
          <Heading textAlign='center' level={small ? 6 : 4}>
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
