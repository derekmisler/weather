import { PLACES_ACTION_TYPES } from 'utils/actions'

interface PlacesState {
  fetching?: boolean
  error?: string
  response?: any
}
const defaultState = {
  fetching: false
} as PlacesState

const { PLACES_REQUEST, PLACES_SUCCESS, PLACES_ERROR } = PLACES_ACTION_TYPES

export const placesReducer = (state = defaultState, action) => {
  if (!action) return state
  const { payload } = action
  switch (action.type) {
    case PLACES_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case PLACES_SUCCESS:
      return {
        ...state,
        response: payload.response,
        fetching: false
      }
    case PLACES_ERROR:
      return {
        ...state,
        error: payload.error,
        fetching: false
      }
    default:
      return state
  }
}
