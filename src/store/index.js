import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'
import Api from '../network/Api'

/**
 * Create the store from all our rootReducer.
 */
const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ Api }))
)

/**
 * Export the store as default
 */
export default store