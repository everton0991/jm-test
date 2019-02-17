import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import IconTrending from '../../../components/IconTrending'

/**
 * Component styles.
 */
const styles = ({
  font: {
    color: '#ffffff'
  }
})

const ActionText = ({ ...props }) => {
  const { classes } = props

  return (
    <Grid 
      container
      direction='column'
      alignItems='center'>
      <IconTrending />
      <Typography
        variant='h5'
        gutterBottom
        style={{ marginTop: '50px' }}
        className={classes.font}>
        Cotação de seguros
      </Typography>
      <Typography
        variant='body1'
        gutterBottom
        className={classes.font}>
        Solução inovadora da lider de mercado
      </Typography>
    </Grid>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(ActionText)