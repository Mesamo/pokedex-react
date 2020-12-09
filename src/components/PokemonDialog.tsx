import { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import BackspaceIcon from '@material-ui/icons/ArrowBack';
import { duration } from '@material-ui/core/styles/transitions';

import { PokemonModel } from '../models/PokemonModel';
import { getSpriteBackground } from '../utils/getSpriteBackground';
import PokemonDetail from './PokemonDetail';

const styles = createStyles({
  modal: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 0'
  },
  back: {
    position: 'absolute',
    top: 10,
    left: 10
  }
});

interface PokemonDialogProps extends WithStyles<typeof styles> {
  open: boolean;
  pokemon: PokemonModel | undefined;
  handleClose: () => void;
}

const PokemonDialog: FC<PokemonDialogProps> = props => {
  const { classes, open, pokemon, handleClose } = props;

  const color = getSpriteBackground(pokemon ? pokemon.types : []);

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
      onEscapeKeyDown={handleClose}
    >
      <Zoom in={open} timeout={{ enter: duration.short, exit: duration.leavingScreen }}>
        <div className={classes.modal} style={{ background: color }}>
          <IconButton
            className={classes.back}
            onClick={handleClose}
            color="inherit"
            aria-label="Back"
          >
            <BackspaceIcon />
          </IconButton>
          {pokemon ? <PokemonDetail pokemon={pokemon} /> : ''}
        </div>
      </Zoom>
    </Dialog>
  );
};

export default withStyles(styles)(PokemonDialog);
