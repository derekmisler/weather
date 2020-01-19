import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'js-cookie'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import { appMiddleware } from './middleware'
import { rootReducer } from './reducers'

const middlewares = [thunkMiddleware, ...appMiddleware]
const composedMiddleware = composeWithDevTools({ trace: true, traceLimit: 30 })(applyMiddleware(...middlewares))

export const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage: new CookieStorage(Cookies)
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store: any = createStore(persistedReducer, undefined, composedMiddleware)
  store.__persistor = persistStore(store)
  return store
}
