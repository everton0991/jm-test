import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconTrending from '../IconTrending'
import { Grid } from '@material-ui/core'

/**
 * Component styles.
 */
const styles = ({
  header: {
    background:  'linear-gradient(to right, #AA65F5, #8D85EE)',
    color: '#ffffff',
    padding: '20px 25px',
  },
  headline: {
    color: '#ffffff',
    marginLeft: '25px'
  },
  thumbnail: {
    width: '40px',
    height: '40px',
    borderRadius: '50px',
    overflow: 'hidden'
  }
})

const Header = ({ ...props }) => {
  const { classes } = props

  return (
    <Grid 
      container
      direction='row'
      alignItems='center'
      className={classes.header}>
      <IconTrending />
      <Grid style={{ flex: '5' }}>
        <Typography
          className={classes.headline}
          variant='body2'>
            Nova cotação  
        </Typography>
        <Typography
          className={classes.headline}
          variant='body1'>
            #0980 
        </Typography>
      </Grid>
      <Grid className={classes.thumbnail}>
        <img 
          style={{ height: '40px' }}
          src='https://goo.gl/RaSrJ7' 
          alt='Profile' />
      </Grid>
    </Grid>
  )
}

/**
 * Exporting component with styles.
 */
export default withStyles(styles)(Header)