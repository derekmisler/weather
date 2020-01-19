import { combineReducers } from 'redux'
import { placesReducer } from './places'

export interface RootState {
  places: any
}
export const rootReducer = combineReducers({
  places: placesReducer
})
