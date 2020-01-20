import keymirror from 'keymirror'
import { GOOGLE_ENDPOINTS } from 'utils/callApi'

export const PLACES_ACTION_TYPES = keymirror({
  PLACES_REQUEST: null,
  PLACES_SUCCESS: null,
  PLACES_ERROR: null
})

export const SELECT_PLACE_ACTION_TYPES = keymirror({
  SELECT_PLACE_REQUEST: null,
  SELECT_PLACE_SUCCESS: null,
  SELECT_PLACE_ERROR: null
})
export const RESET_PLACES = 'RESET_PLACES'
export const SET_CURRENT_PLACE = 'SET_CURRENT_PLACE'
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES'

export const getPlaces = (text: string) => ({
  payload: {
    callApi: true,
    requestData: {
      endpoint: GOOGLE_ENDPOINTS.places,
      params: {
        types: 'geocode',
        input: text
      }
    },
    actionTypes: Object.keys(PLACES_ACTION_TYPES)
  }
})

export const selectPlace = place => ({
  payload: {
    geocode: true,
    place,
    actionTypes: Object.keys(SELECT_PLACE_ACTION_TYPES)
  }
})

export const currentPlace = location => ({
  type: SET_CURRENT_PLACE,
  payload: { location }
})

export const resetPlaces = () => ({
  type: RESET_PLACES
})

export const addToFavorite = (selection, shouldAdd) => ({
  type: shouldAdd ? ADD_TO_FAVORITES : REMOVE_FROM_FAVORITES,
  payload: selection
})
