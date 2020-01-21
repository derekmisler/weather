import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'
import { appMiddleware } from './middleware'
import { rootReducer } from './reducers'

const middlewares = [thunkMiddleware, ...appMiddleware]
const composedMiddleware = composeWithDevTools({ trace: true, traceLimit: 30 })(applyMiddleware(...middlewares))

export const configureStore = () => {
  const store: any = createStore(rootReducer, undefined, composedMiddleware)
  store.__persistor = persistStore(store)
  return store
}
