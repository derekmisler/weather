import { Reducer, Action } from 'redux'

interface PlacesState {
  fetching?: boolean
}
const defaultState = {
  fetching: false
} as PlacesState

export const placesReducer: Reducer<PlacesState, Action> = (state = defaultState, action) => {
  if (!action) return state

  switch (action.type) {
    default:
      return state
  }
}
