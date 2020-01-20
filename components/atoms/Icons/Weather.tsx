import { SFC, memo } from 'react'
import FilterDramaRoundedIcon from '@material-ui/icons/FilterDramaRounded'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import OpacityRoundedIcon from '@material-ui/icons/OpacityRounded'
import { TYPOGRAPHY, orange, teal, whiteDarkest } from 'styles'

export const Weather: SFC<{ forecast: string }> = memo(({ forecast }) => {
  const isCloudy = forecast.toLowerCase().indexOf('cloudy') > -1
  const isRainy = forecast.toLowerCase().indexOf('rain') > -1
  const iconStyles = { fontSize: TYPOGRAPHY.iconSize }
  if (isCloudy) {
    return <FilterDramaRoundedIcon style={{ ...iconStyles, fill: whiteDarkest }} />
  }
  if (isRainy) {
    return <OpacityRoundedIcon style={{ ...iconStyles, fill: teal }} />
  }
  return <WbSunnyRoundedIcon style={{ ...iconStyles, fill: orange }} />


})
