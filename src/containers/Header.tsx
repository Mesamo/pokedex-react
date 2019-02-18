import React, { memo, FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HelpIcon from '@material-ui/icons/Help';
import Typography from '@material-ui/core/Typography';

const styles = createStyles({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    flexGrow: 1
  }
});

interface HeaderProps extends WithStyles<typeof styles> {}

const Header: FC<HeaderProps> = props => {
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
  );
};

export default memo(withStyles(styles)(Header));
