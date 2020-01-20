import { STATION_ACTION_TYPES, WEATHER_ACTION_TYPES } from 'utils/actions'

interface PlacesState {
  fetchingWeatherProperties?: boolean
  fetchingWeather?: boolean
  error?: string
  properties: any
  forecastToday: any
  forecastFuture: any[]
}
const defaultState = {
  fetchingWeatherProperties: false,
  fetchingWeather: false,
  properties: {},
  forecastToday: {},
  forecastFuture: [],
  forecastHourly: [],
  error: undefined
} as PlacesState

const { STATION_REQUEST, STATION_SUCCESS, STATION_ERROR } = STATION_ACTION_TYPES
const { WEATHER_REQUEST, WEATHER_SUCCESS, WEATHER_ERROR } = WEATHER_ACTION_TYPES

export const weatherReducer = (state = defaultState, action) => {
  if (!action) return state
  const { payload } = action
  switch (action.type) {
    case STATION_REQUEST:
      return {
        ...state,
        fetchingWeatherProperties: true
      }
    case STATION_SUCCESS: {
      const {
        requestData: { group },
        response: { properties = {} } = {}
      } = payload
      const forecastID = group.split(',').join('-')
      return {
        ...state,
        properties: {
          ...state.properties,
          [forecastID]: properties
        },
        fetchingWeatherProperties: false
      }
    }
    case STATION_ERROR:
      return {
        ...state,
        error: payload.error,
        fetchingWeatherProperties: false
      }
    case WEATHER_REQUEST:
      return {
        ...state,
        fetchingWeather: true
      }
    case WEATHER_SUCCESS: {
      const {
        requestData: { key },
        response: { properties: { periods = [] } = {} } = {}
      } = payload
      const [forecastToday] = periods
      const isSingleDay = key === 'day'
      const forecast = isSingleDay
        ? { forecastToday: forecastToday, forecastFuture: [...periods] }
        : { forecastHourly: periods.slice(0, 12) }
      return {
        ...state,
        ...forecast,
        fetchingWeather: false
      }
    }
    case WEATHER_ERROR:
      return {
        ...state,
        error: `Oh no, something went wrong! Just start over. It's really all you can do.`,
        fetchingWeather: false
      }
    default:
      return state
  }
}