import React, { memo, FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';

import { getPokemonForm } from '../hooks/getPokemonForm';
import { getSpriteBackground } from '../utils/getSpriteBackground';

const styles = createStyles({
  sprite: {
    height: '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

interface PokemonFormProps extends WithStyles<typeof styles> {
  id: number;
  types: string[];
}

const PokemonForm: FC<PokemonFormProps> = props => {
  const { classes, id, types } = props;
  const color = getSpriteBackground(types);
  const form = getPokemonForm(id);
  return (
    <div className={classes.sprite} style={{ background: color }}>
      <img alt="sprite_form" src={form} />
    </div>
  );
};

export default memo(withStyles(styles)(PokemonForm));
