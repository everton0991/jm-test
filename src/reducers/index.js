import { combineReducers } from 'redux'

/**
 * Export all the combined reducers.
 */
import { search } from '../services/Search/Reducer'

/**
 * Exporting all the combined reducers from the services.
 */
export default combineReducers({
  search
})