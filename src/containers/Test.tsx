import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import BackspaceIcon from '@material-ui/icons/ArrowBack';

import { getSpriteBackground } from '../utils/getSpriteBackground';
import PokemonDetail from '../components/PokemonDetail';

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

interface Props extends WithStyles<typeof styles> {
}

const Test: FC<Props> = (props) => {
  const { classes } = props;

  const pokemon = {
    id: '00001',
    index: 1,
    name: 'Bulbasaur',
    types: ['grass', 'poison']
  }

  const handleClose = () => {};
  const color = getSpriteBackground(pokemon.types);

  return (
    <div className={classes.modal} style={{ background: color }}>
      <IconButton
        className={classes.back}
        onClick={handleClose}
        color="inherit"
        aria-label="Back"
      >
        <BackspaceIcon />
      </IconButton>
      <PokemonDetail pokemon={pokemon} />
    </div>
  )
}

export default withStyles(styles)(Test);
