import { PLACES_ACTION_TYPES, RESET_PLACES, SELECT_PLACE_ACTION_TYPES, SET_CURRENT_PLACE } from 'utils/actions'
import { parseSuggestions } from 'utils/parseSuggestions'

interface PlacesState {
  fetchingPlaces?: boolean
  fetchingLatLong?: boolean
  error?: string
  suggestions: any[]
  selection?: any
}
const defaultState = {
  fetchingPlaces: false,
  fetchingLatLong: false,
  suggestions: [],
  selection: {},
  error: undefined
} as PlacesState

const { PLACES_REQUEST, PLACES_SUCCESS, PLACES_ERROR } = PLACES_ACTION_TYPES
const { SELECT_PLACE_REQUEST, SELECT_PLACE_SUCCESS, SELECT_PLACE_ERROR } = SELECT_PLACE_ACTION_TYPES

export const placesReducer = (state = defaultState, action) => {
  if (!action) return state
  const { payload } = action
  switch (action.type) {
    case PLACES_REQUEST:
      return {
        ...state,
        fetchingPlaces: true
      }
    case PLACES_SUCCESS:
      return {
        ...state,
        suggestions: parseSuggestions(payload.response),
        fetchingPlaces: false
      }
    case PLACES_ERROR:
      return {
        ...state,
        error: payload.error,
        suggestions: [],
        fetchingPlaces: false
      }
    case SELECT_PLACE_REQUEST:
      return {
        ...state,
        fetchingLatLong: true,
      }
    case SET_CURRENT_PLACE:
    case SELECT_PLACE_SUCCESS:
      return {
        ...state,
        selection: payload,
        fetchingLatLong: false
      }
    case SELECT_PLACE_ERROR:
      return {
        ...state,
        error: payload.error,
        fetchingLatLong: false,
        selection: {}
      }
      case RESET_PLACES:
      return {
        ...state,
        suggestions: [],
        fetchingPlaces: false,
        fetchingLatLong: false,
        selection: {}
      }
    default:
      return state
  }
}
