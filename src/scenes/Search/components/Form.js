import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'
import styles from './styles'

const Check = ({ didSearchReturnOk }) => {
  const iconColor = (didSearchReturnOk === true)
    ? '#59db5c'
    : '#d0d0d0'

  return (
    <InputAdornment position="end">
      <Icon style={{ color: iconColor }}>
        check_circle
      </Icon>
    </InputAdornment>
  )
}

Check.defaultProps = {
  didSearchReturnOk: false
}

Check.propTypes = {
  didSearchReturnOk: PropTypes.bool
}

const Form = ({
  classes, inputValue, handleChange, searchOk
}) => (
  <Grid
    container
    direction="column"
    className={classes.whiteBlock}
  >
    <FormControl fullWidth>
      <InputLabel
        shrink
        htmlFor="cnpj"
        className={classes.bootstrapFormLabel}
      >
        CNPJ
      </InputLabel>
      <InputBase
        id="cnpj"
        value={inputValue}
        placeholder="Digite seu CNPJ aqui."
        onChange={handleChange}
        endAdornment={<Check didSearchReturnOk={searchOk} />}
        classes={{
          root: classes.bootstrapRoot,
          input: classes.bootstrapInput
        }}
      />
    </FormControl>
  </Grid>
)

Form.defaultProps = {
  inputValue: '',
  handleChange: () => {},
  searchOk: false
}

Form.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  inputValue: PropTypes.string,
  handleChange: PropTypes.func,
  searchOk: PropTypes.bool
}

export default withStyles(styles)(Form)
