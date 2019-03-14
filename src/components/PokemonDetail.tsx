import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import BackspaceIcon from '@material-ui/icons/ArrowBack';

import DetailTransition from './DetailTransition';
import { getSpriteBackground } from '../utils/getSpriteBackground';

const styles = createStyles({
  modal: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  back: {
    position: 'absolute',
    top: 10,
    left: 10
  }
});

interface PokemonDetailProps extends WithStyles<typeof styles> {
  open: boolean;
  types: string[];
  handleClose: () => void;
}

const PokemonDetail: FC<PokemonDetailProps> = props => {
  const { classes, open, types, handleClose } = props;

  const color = getSpriteBackground(types);

  const onExist = () => {
    console.log('exist');
  };

  const onEnter = () => {
    console.log('enter');
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onEnter={onEnter}
      onExit={onExist}
      TransitionComponent={DetailTransition}
      onEscapeKeyDown={handleClose}
    >
      <div className={classes.modal} style={{ background: color }}>
        <IconButton
          className={classes.back}
          onClick={handleClose}
          color="inherit"
          aria-label="Back"
        >
          <BackspaceIcon />
        </IconButton>
      </div>
    </Dialog>
  );
};

export default withStyles(styles)(PokemonDetail);
