import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Mail from '@material-ui/icons/Mail';
import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import Info from '@material-ui/icons/Info';
import SvgIcon from '@material-ui/core/SvgIcon';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

class InputField extends React.Component {

  state = {
    value: '',
  };

  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {


  const {
    _id,
    displayName,
    type,
    onChange,
    placeholder,
    required, // By default is true, if equals false than ignore
    icon,
    focusInput,
    error,
    defaults,
    classes
  } = this.props;

  return (
    <TextField id={_id} label={defaults.showLabels ? displayName : ''}
        type={type}
        placeholder={defaults.showPlaceholders ? placeholder : ''}
        required={required !== false}

        autoFocus={focusInput}
        error={!!error}
        helperText={error ? error.errStr : null}

        margin="normal"
          InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => onChange(e, _id)}
        onBlur={(e) => onChange(e, _id)}

        style={{ margin: 8 }}

        InputProps={{
            startAdornment: (
                getIcon(iconMapper[_id])
            ),
          }}
          fullWidth
        />

  )
}
}

function getIcon(icon) {
  if (icon === "user") {
    return (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    )
  }
  if (icon === "mail") {
    return (
      <InputAdornment position="start">
        <Mail />
      </InputAdornment>
    )
  }
  if (icon === "lock") {
    return (
      <InputAdornment position="start">
        <Lock />
      </InputAdornment>
    )
  }
  if (icon === "unlock alternate") {
    return (
      <InputAdornment position="start">
        <LockOpen />
      </InputAdornment>
    )
  }
  if (icon === "unlock alternate") {
    return (
      <InputAdornment position="start">
        <LockOpen />
      </InputAdornment>
    )
  }
  if (icon === "info") {
    return (
      <InputAdornment position="start">
        <Info />
      </InputAdornment>
    )
  }
}



const iconMapper = {
  username: 'user',
  email: 'mail',
  password: 'lock',
  confirmPassword: 'unlock alternate',
  currentPassword: 'unlock alternate',
  fullName: 'info'
}

export default InputField
