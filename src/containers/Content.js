import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  content: {
    marginTop: '64px'
  }
}

class Content extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.content}>
      </div>
    )
  }
}

Content.protoTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Content);
