import { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

import Drawer from '../components/Drawer';
import { useBoolState } from '../hooks/useBoolState';

const useStyles = makeStyles({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    flexGrow: 1
  }
});

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const classes = useStyles();
  const [ open, openFn, closeFn] = useBoolState();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton className={classes.menuButton} onClick={openFn} color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
          Pokédex
        </Typography>
      </Toolbar>
      <Drawer open={open} onOpen={openFn} onClose={closeFn}></Drawer>
    </AppBar>
  );
};

export default Header;
