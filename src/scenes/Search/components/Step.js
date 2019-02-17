import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Grid, Typography } from '@material-ui/core'

/**
 * Component styles.
 */
const styles = ({
  stepsBlock: {
    padding: '20px 25px'
  },
  step: {
    border: '3px solid #AA65F5',
    padding: '2px 8px',
    marginRight: '25px'
  },
  stepNumber: {
    color: '#AA65F5',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  stepText: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#8A8F9A'
  }
})

const Step = ({ ...props }) => {
  const { classes } = props

  return (
    <Grid
      container
      direction='row'
      alignItems='center'
      className={classes.stepsBlock}>
      <Grid className={classes.step}>
        <Typography
          className={classes.stepNumber}
          variant='body1'>
          1
        </Typography>
      </Grid>
      <Typography
        className={classes.stepText}
        variant='subtitle1'>
        Buscar por CNPJ
      </Typography>
    </Grid>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Step)