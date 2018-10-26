import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { fetchCompanyByCNPJ } from '../../services/Search/Actions'

import { Grid } from '@material-ui/core'

import Main from '../../components/Main'
import Header from '../../components/Layout/Header'
import Form from './components/Form'
import BottomAction from './components/BottomAction'
import Step from './components/Step'
import Linear from '../../components/Loader/Linear'
import Error from '../../components/Message/Error'

/**
 * Component styles.
 */
const styles = (theme) => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    background: '#F2F6F8',
    width: '100vw',
    height: '100vh'
  },
  wrapper: {
    color: '#000',
  }
})

/**
 * Here we are mapping our states to this component props
 * 
 * @param {Object} state 
 */
const mapStateToProps = state => {
  return {
    isFetching: state.search.isFetching,
    company: state.search.company,
    error: state.search.error
  }
}

/**
 * Here we are mapping our actions to the props.
 * 
 * @param {Object} state 
 */
const mapDispatchToProps = {
  onSearchSubmit: fetchCompanyByCNPJ
}

class Search extends Component {

  state = { cnpj: '' }

  handleClick () {
    const { cnpj } = this.state
    const { onSearchSubmit } = this.props

    onSearchSubmit({ cnpj })
  }

  handleChange = event => {
    const { value } = event.target
    this.setState({ cnpj: value })
  }

  render () {
    const { cnpj } = this.state
    const { classes, isFetching, company, error } = this.props

    return (
      <Main>
        <Grid className={classes.background}>
          {isFetching && <Linear />}
          <Header />
          <Grid className={classes.wrapper}>
            <Step />
            <Form 
              searchOk={(company)? true : false}
              inputValue={cnpj}
              handleChange={this.handleChange.bind(this)} />
          {error && <Error message={error} />}
          </Grid>
          <BottomAction 
            disabled={(cnpj.length > 0) ? false : true}
            handleClick={this.handleClick.bind(this)} />
        </Grid>
      </Main>
    )
  }
}

/**
 * Exporting component with styles and mapping the states.
 */
export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Search)
)
