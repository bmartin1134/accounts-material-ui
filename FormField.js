import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
};

class FormField extends React.Component {
  constructor() {
     super();
     this.state = {id: null};
  }
  render() {
    const {
      _id,
      onSubmit,
      children,
      classes
    } = this.props;


     return(
          <form onSubmit={onSubmit} >
          {children}

          </form>
     )
  }
}
export default withStyles(styles)(FormField);
