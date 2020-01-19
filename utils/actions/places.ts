import keymirror from 'keymirror'
import { GOOGLE_ENDPOINTS } from 'utils/callApi'

export const PLACES_ACTION_TYPES = keymirror({
  PLACES_REQUEST: '',
  PLACES_SUCCESS: '',
  PLACES_ERROR: ''
})

export const getPlaces = (text: string) => {
  console.log('--------------------')
  console.log('text', text)
  console.log('--------------------')
  return {
    payload: {
      callApi: true,
      requestData: {
        endpoint: GOOGLE_ENDPOINTS.places,
        params: { input: text }
      },
      actionTypes: Object.keys(PLACES_ACTION_TYPES)
    }
  }
}
