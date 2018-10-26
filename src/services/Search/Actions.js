import * as types from './Types'

/**
 * Fetch the full address based on teh zipcode.
 * 
 * @param {Integer} zipcode 
 */
export const fetchCompanyByCNPJ = ({ cnpj }) => (dispatch, getState, { Api }) => {
  /**
   * Dispatch a request.
   */
  dispatch({ type: types.REQUEST_COMPANY_DATA }) 

  /**
   * Fetch address using http://www.mocky.io API.
   */
  Api.get('/5bd285b03400004f00cfdd9a', { cnpj })
    .then(response => {
      if(response.data === cnpj) {
        /**
         * Dispatch the action with the company data get by the cnpj
         */
        dispatch({ 
          type: types.FETCH_COMPANY_SUCCESS,
          payload: response.data
        }) 
      } else {
        /**
         * Dispatch the error action type.
         */
        dispatch({ 
          type: types.FETCH_COMPANY_FAIL,
          payload: 'CNPJ não encontrado.'
        }) 
      }
    })
}
