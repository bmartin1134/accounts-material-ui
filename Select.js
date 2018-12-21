import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {

  margin: theme.spacing.unit,
  },
  group: {
    margin: theme.spacing.unit,
  },
});


class SelectField extends React.Component {

  state = {
    defaultOption: null
  }

  componentDidMount () {
    const {
      _id,
      options,
      onChange
    } = this.props
this.setState({ value: ""});
    const defaultOption = options.filter(o => o.default)[0]
    if (defaultOption) {

      // let parent know that this field has a default value
    this.setState({ value: defaultOption.value });
      onChange(defaultOption.value, _id)
    }
  }

  render () {
    const {
      _id,
      values,
      displayName,
      options,
      required,
      error,
      defaults,
      classes,
      others
    } = this.props

    const { defaultOption } = this.state

    return (

      <FormControl
        required={required !== false}
        className={classes.formControl}
        fullWidth>
        {defaults.showLabels && <InputLabel shrink htmlFor={_id}>{displayName}</InputLabel>}

          <Select
            value={this.state.value}
            onChange={this.handleChange}
          >
          {!!options.filter(o => o.default)[0] &&
          <MenuItem key="10000" value="">
            <em>None</em>
          </MenuItem>
        }
          {options.map((option, i) => (
            <MenuItem key={i} value={option.value}>{option.text}</MenuItem>
          ))}
          </Select>
      </FormControl>


    )
  }

  handleChange = event => {
    const {
      _id,
      onChange
    } = this.props
    this.setState({ value: event.target.value });
    onChange(event.target.value, _id)
  }
}

export default withStyles(styles)(SelectField);
