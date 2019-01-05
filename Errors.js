import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  error: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit*-1,
    marginTop: theme.spacing.unit,
    marginBottom:  theme.spacing.unit,
    padding:  theme.spacing.unit,
    background: 'lightYellow',
    border: 'brown',
    'text-align': 'center'
  },
});

function Errors(props) {
  const {classes, errors } = props;
  return (
    !!errors.length > 0 &&
    <Paper
    className={classes.error}
    >
    {errors.map((err, i) => (<b key={i}>{err.errStr}<br /></b>))}

    </Paper>
  )
}

Errors.propTypes = {
  errors: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,

}

export default withStyles(styles)(Errors);
