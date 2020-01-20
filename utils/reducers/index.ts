import { combineReducers } from 'redux'
import { placesReducer } from './places'
import { weatherReducer } from './weather'

export interface RootState {
  places: any
  weather: any
}
export const rootReducer = combineReducers({
  places: placesReducer,
  weather: weatherReducer
})
