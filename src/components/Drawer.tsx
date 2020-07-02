import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import HelpIcon from '@material-ui/icons/HelpOutline';

const styles = createStyles({
  list: {
    width: '250px'
  },
  title: {
    textAlign: 'center'
  }
});

interface DrawerProps extends WithStyles<typeof styles> {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Drawer: FC<DrawerProps> = props => {
  const { classes, open, onOpen, onClose } = props;

  const aboutClick = () => {
    onClose();
  };

  return (
    <SwipeableDrawer open={open} onOpen={onOpen} onClose={onClose}>
      <div className={classes.list}>
        <List>
          <ListItem>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Pokédex
            </Typography>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={aboutClick}>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </div>
    </SwipeableDrawer>
  );
};

export default withStyles(styles)(Drawer);
