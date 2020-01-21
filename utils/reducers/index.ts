import { combineReducers } from 'redux'
import { placesReducer } from './places'
import { weatherReducer } from './weather'
import { favoritesReducer } from './favorites'

export interface RootState {
  places: any
  weather: any
  favorites: any
}
export const rootReducer = combineReducers({
  places: placesReducer,
  weather: weatherReducer,
  favorites: favoritesReducer
})
