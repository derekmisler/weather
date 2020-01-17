import { combineReducers } from 'redux'
import { placesReducer } from './places'

export const rootReducer = combineReducers({
  places: placesReducer
})

