import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import { Grid, Typography } from '@material-ui/core'
import styles from './styles'

const Step = ({ classes }) => {
  const {
    stepsBlock, step, stepNumber, stepText
  } = classes

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={stepsBlock}
    >
      <Grid className={step}>
        <Typography
          className={stepNumber}
          variant="body1"
        >
          1
        </Typography>
      </Grid>
      <Typography
        className={stepText}
        variant="subtitle1"
      >
        Buscar por CNPJ
      </Typography>
    </Grid>
  )
}

Step.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired
}

export default withStyles(styles)(Step)
