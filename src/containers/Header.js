import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';

const styles = {
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    flexGrow: 1
  }
}

const Header = props => {
  const { classes } = props;
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
          Pokédex
        </Typography>
        <IconButton color="inherit">
          <HelpIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Header.protoTypes = {
  classes: PropTypes.object.isRequired
}

export default memo(withStyles(styles)(Header));
