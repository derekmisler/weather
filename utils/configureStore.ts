import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import { appMiddleware } from './middleware'
import { rootReducer } from './reducers'

export const configureStore = (preloadedState = {}) => {
  let store
  const middlewares = [thunkMiddleware, ...appMiddleware]
  const composedMiddleware = composeWithDevTools(applyMiddleware(...middlewares))
  const isClient = typeof window !== 'undefined'

  if (isClient) {
    const { persistReducer } = require('redux-persist')
    const storage = require('redux-persist/lib/storage').default
    const persistConfig = {
      key: 'store',
      storage
    }
    store = createStore(
      persistReducer(persistConfig, rootReducer),
      preloadedState,
      composedMiddleware
    )
  } else {
    store = createStore(
      rootReducer,
      preloadedState,
      composedMiddleware
    )
  }
  return store
}

export const store = configureStore()
export const persistor = persistStore(store)
