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
    <TextField id={_id} label={displayName}
        type={type}
        placeholder={defaults.showPlaceholders ? placeholder : ''}
        required={Boolean(required) ? "true" : null}

        autoFocus={focusInput}
        error={Boolean(error) ? "true" : null}
        helperText={error.errStr}

        margin="normal"
          InputLabelProps={{
          shrink: true,
        }}
        onChange={(e) => onChange(e, _id)}
        onBlur={(e) => onChange(e, _id)}

        style={{ margin: 8 }}

        InputProps={{
            startAdornment: (
                getIcon(icon)
            ),
          }}

        />

  )
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
  if (icon === "password") {
    return (
      <InputAdornment position="start">
        <Lock />
      </InputAdornment>
    )
  }
  if (icon === "confirmPassword") {
    return (
      <InputAdornment position="start">
        <LockOpen />
      </InputAdornment>
    )
  }
  if (icon === "currentPassword") {
    return (
      <InputAdornment position="start">
        <LockOpen />
      </InputAdornment>
    )
  }
  if (icon === "fullName") {
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
