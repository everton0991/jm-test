import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'
import Icon from '@material-ui/core/Icon'
import FormControl from '@material-ui/core/FormControl'
import InputBase from '@material-ui/core/InputBase'
import InputLabel from '@material-ui/core/InputLabel'

/**
 * Component styles.
 */
const styles = (theme) => ({
  whiteBlock: {
    backgroundColor: '#ffffff',
    padding: '15px 25px'
  },
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapFormLabel: {
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 0px',
    color: '#C3C9CE',
    transition: theme.transitions
    .create([
      'border-color', 'box-shadow'
    ]),
    '&:focus': {
      color: '#AA65F5 !important'
    }
  },
  bootstrapInput: {
    fontSize: '18px',
    fontWeight: 'bold',
    padding: '10px 0',
    color: '#646B79',
    transition: theme.transitions
      .create([
        'border-color', 'box-shadow'
      ]),
    '&:focus': {
      borderColor: '#80bdff'
    }
  }
})

/**
 * Input check icon.
 * 
 * @param {Boolean} didSearchReturnOk
 */
const Check = ({ ...props }) => {
  const iconColor = (props.didSearchReturnOk === true)
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

/**
 * Form component that is exported byt default.
 * 
 * @param {*} props
 */
const Form = ({ ...props }) => {
  const { classes } = props

  return (
    <Grid
      container
      direction='column'
      className={classes.whiteBlock}>
      <FormControl fullWidth>
        <InputLabel
          shrink
          htmlFor='cnpj'
          className={classes.bootstrapFormLabel}>
          CNPJ
        </InputLabel>
        <InputBase
          id='cnpj'
          value={props.inputValue}
          placeholder='Digite seu CNPJ aqui.'
          onChange={props.handleChange}
          endAdornment={<Check didSearchReturnOk={props.searchOk} />}
          classes={{
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          }} />
      </FormControl>
    </Grid >
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Form)