import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import { contextWrapper } from '../../services/SearchContext'

import Main from '../../components/Main'
import Header from '../../components/Layout/Header'
import Form from './components/Form'
import BottomAction from './components/BottomAction'
import Step from './components/Step'
import Linear from '../../components/Loader/Linear'
import Error from '../../components/Message/Error'

const styles = () => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    background: '#F2F6F8',
    width: '100vw',
    height: '100vh'
  },
  wrapper: {
    color: '#000'
  }
})

const Search = (props) => {
  const {
    classes,
    isFetching,
    company,
    cnpj,
    actions,
    error
  } = props

  return (
    <Main>
      <Grid className={classes.background}>
        {isFetching && <Linear />}
        <Header />
        <Grid className={classes.wrapper}>
          <Step />
          <Form
            searchOk={!!company}
            inputValue={cnpj}
            handleChange={actions.handleChange}
          />
          {error && <Error message={error} />}
        </Grid>
        <BottomAction
          disabled={!cnpj}
          handleClick={actions.handleClick}
        />
      </Grid>
    </Main>
  )
}

Search.defaultProps = {
  cnpj: '',
  company: null,
  isFetching: '',
  actions: {
    handleClick: () => {},
    handleChange: () => {}
  },
  error: ''
}

Search.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  company: PropTypes.string,
  cnpj: PropTypes.string,
  isFetching: PropTypes.bool,
  actions: PropTypes.objectOf(PropTypes.func),
  error: PropTypes.string
}

export default withStyles(styles)(contextWrapper(Search))
