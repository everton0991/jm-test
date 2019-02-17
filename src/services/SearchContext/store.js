import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Provider } from './index'
import Api from '../../network/Api'

class SearchStore extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      cnpj: '',
      company: '',
      isFetching: false,
      error: '',
      actions: {
        handleClick: this.handleClick.bind(this),
        handleChange: this.handleChange.bind(this)
      }
    }

    this.fetchCompanyBy = this.fetchCompanyBy.bind(this)
  }

  fetchCompanyBy = (cnpj) => {
    this.setState({ isFetching: true })

    Api.get('/5bd285b03400004f00cfdd9a', { cnpj })
      .then(response => ((response.data === cnpj)
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
      ))
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState({ cnpj: value })
  }

  handleClick = () => {
    const { cnpj } = this.state
    this.fetchCompanyBy(cnpj)
  }

  render() {
    const { children } = this.props
    const value = { ...this.state }
    return (
      <Provider value={value}>
        {children}
      </Provider>
    )
  }
}

SearchStore.propTypes = {
  children: PropTypes.element.isRequired
}

export default SearchStore
