import keymirror from 'keymirror'
import { GOOGLE_ENDPOINTS } from 'utils/callApi'

export const PLACES_ACTION_TYPES = keymirror({
  PLACES_REQUEST: null,
  PLACES_SUCCESS: null,
  PLACES_ERROR: null
})

export const getPlaces = (text: string) => ({
  payload: {
    callApi: true,
    requestData: {
      endpoint: GOOGLE_ENDPOINTS.places,
      params: { input: text }
    },
    actionTypes: Object.keys(PLACES_ACTION_TYPES)
  }
})
