import React, { memo, FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';

import { getPokemonForm } from '../hooks/getPokemonForm';
import { getSpriteBackground } from '../utils/getSpriteBackground';

const styles = createStyles({
  sprite: {
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

interface PokemonFormProps extends WithStyles<typeof styles> {

  /**
   * Pokemon id number
   *
   * @type {number}
   * @memberof PokemonFormProps
   */
  id: number;

  /**
   * Pokemon types
   *
   * @type {string[]}
   * @memberof PokemonFormProps
   */
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
