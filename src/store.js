import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootDeducer from './reducers'

const __PRODUCTION__ = process.env.NODE_ENV === 'production'

const configureStore = () => {
  const middlewares = []

  if (!__PRODUCTION__) {
    middlewares.push(createLogger())
  }
  middlewares.push(thunk)

  const store = createStore(rootDeducer, applyMiddleware(...middlewares))

  return store
}

export default configureStore
