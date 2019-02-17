import React, { PureComponent } from 'react'
import { Provider } from './index'
import Api from '../../network/Api'
import Search from '../../scenes/Search'

class SearchStore extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      cnpj: '',
      company: null,
      isFetching: false,
      error: '',
      actions: {
        handleClick: this.handleClick.bind(this),
        handleChange: this.handleChange.bind(this)
      }
    }

    this.fetchCompanyBy = this.fetchCompanyBy.bind(this)
  }

  handleClick() {
    const { cnpj } = this.state
    this.fetchCompanyBy(cnpj)
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({ cnpj: value })
  }

  fetchCompanyBy = cnpj => {
    this.setState({ isFetching: true })

    Api.get('/5bd285b03400004f00cfdd9a', { cnpj })
      .then(response => {
        (response.data === cnpj)
          ? this.setState({ 
            company: response.data,
            error: '', 
            isFetching: false 
          })
          : this.setState({ 
            company: null,
            error: 'CNPJ não encontrado.', 
            isFetching: false 
          })
      })
  }

  render() {
    return (
      <Provider value={this.state}>
        <Search />
      </Provider>
    )
  }
}

export default SearchStore