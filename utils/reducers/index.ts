import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'js-cookie'
import { placesReducer } from './places'
import { weatherReducer } from './weather'
import { favoritesReducer } from './favorites'

export interface RootState {
  places: any
  weather: any
  favorites: any
}

const createConfig = (key = '') => ({
  key,
  storage: new CookieStorage(Cookies)
})

const placesPersistConfig = createConfig('places')
const weatherPersistConfig = createConfig('places')
const favoritesPersistConfig = createConfig('favorites')

export const rootReducer = combineReducers({
  places: persistReducer(placesPersistConfig, placesReducer),
  weather: persistReducer(weatherPersistConfig, weatherReducer),
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer as any)
})
