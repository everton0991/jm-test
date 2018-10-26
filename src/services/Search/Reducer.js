import { combineReducers } from 'redux'
import * as types from './Types'

/**
 * This is the company data state.
 * 
 * @param {Array} state 
 * @param {Array} action 
 */
const company = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_COMPANY_SUCCESS:
      return action.payload
    case types.FETCH_COMPANY_FAIL:
    case types.REQUEST_COMPANY_DATA:
      return null
    default:
      return state
  }
}

/**
 * This is the fetching state to control the request.
 * 
 * @param {Boolean} state 
 * @param {Array} action 
 */
const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.REQUEST_COMPANY_DATA:
    return true
    case types.FETCH_COMPANY_SUCCESS:
    case types.FETCH_COMPANY_FAIL:
      return false
    default:
      return state
  }
}

/**
 * This is the error state to control the request.
 * 
 * @param {Boolean} state 
 * @param {Array} action 
 */
const error = (state = null, action) => {
  switch (action.type) {
    case types.FETCH_COMPANY_FAIL:
    return action.payload
    case types.REQUEST_COMPANY_DATA:
    case types.FETCH_COMPANY_SUCCESS:
      return null
    default:
      return state
  }
}

/**
 * Exporting the reducer for the products service.
 */
export const search = combineReducers({
  company,
  isFetching,
  error
})