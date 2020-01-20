import keymirror from 'keymirror'
import { NOAA_ENDPOINTS } from 'utils/callApi'

export const STATION_ACTION_TYPES = keymirror({
  STATION_REQUEST: null,
  STATION_SUCCESS: null,
  STATION_ERROR: null
})

export const WEATHER_ACTION_TYPES = keymirror({
  WEATHER_REQUEST: null,
  WEATHER_SUCCESS: null,
  WEATHER_ERROR: null
})

export const ALERT_ACTION_TYPES = keymirror({
  ALERT_REQUEST: null,
  ALERT_SUCCESS: null,
  ALERT_ERROR: null
})

export const getAlerts = zoneID => ({
  payload: {
    callApi: true,
    requestData: {
      endpoint: NOAA_ENDPOINTS.alerts,
      group: zoneID
    },
    actionTypes: Object.keys(ALERT_ACTION_TYPES)
  }
})

export const getStation = ({ lat, lng }) => ({
  payload: {
    callApi: true,
    requestData: {
      endpoint: NOAA_ENDPOINTS.points,
      group: `${lat},${lng}`
    },
    actionTypes: Object.keys(STATION_ACTION_TYPES)
  }
})

export const getWeather = (url: string, key: string) => ({
  payload: {
    callApi: true,
    requestData: { key, url },
    actionTypes: Object.keys(WEATHER_ACTION_TYPES)
  }
})
