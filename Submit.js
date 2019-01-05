import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';

const styles = theme => ({
  button: {
    marginBottom: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  googleSocial: {
    color: theme.palette.getContrastText('#ea4335'),
    backgroundColor: '#ea4335',
    '&:hover': {
      backgroundColor: '#E82E1E',
    },
  },
  facebookSocial: {
    color: theme.palette.getContrastText('#3b5998'),
    backgroundColor: '#3b5998',
    '&:hover': {
      backgroundColor: '#263961',
    },

  },
  instagramSocial: {
    color: theme.palette.getContrastText('#833ab4'),
    backgroundColor: '#833ab4',
    '&:hover': {
      backgroundColor: '#59277a',
    },

  },
});

function Submit(props)  {

  const { classes, text, onClick, disabled, icon, className, social } = props;
  /* Social Button */
  if (social) {
    const color =
        social === 'google' ? classes.googleSocial
      : social === 'facebook' ? classes.facebookSocial
      : social === 'instagram' ? classes.instagramSocial
      : social

    const icon =
          social === 'google' ? GoogleIcon()
        : social === 'facebook' ? FacebookIcon()
        : social === 'instagram' ? InstagramIcon()
        : social

    return (
      <Button
        variant="contained"
       fullWidth
        color="primary"
         onClick={onClick}
          className={classNames('social-btn', classes.button, color)}>
        {icon}
        Continue with {capitalize(social)}
      </Button>
    )
  }
  return (
    <Button
      variant="contained"
      className={classNames(className, classes.button)}
      disabled={disabled ? 'true' : null}
      onClick={onClick}
      fullWidth
      type="submit"
      >
        {text}
      </Button>
    )


    function InstagramIcon() {
      return (
        <SvgIcon className={classes.leftIcon}>
          <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
        </SvgIcon>
      );
    }

    function GoogleIcon() {
      return (
        <SvgIcon className={classes.leftIcon}>
          <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
        </SvgIcon>
      );
    }

    function FacebookIcon() {
      return (
        <SvgIcon className={classes.leftIcon}>
          <path d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
        </SvgIcon>
      );
    }
}

function capitalize (s) {
  return s[0].toUpperCase() + s.substr(1)
}



Submit.defaultProps = {
  icon: '',
  className: '',
  social: ''
}



export default withStyles(styles)(Submit);
