import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';

import { getSpriteBackground } from '../utils/getSpriteBackground';
import { getSpriteFormUrl } from '../utils/getSpriteFormUrl';

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
   * Pokemon index
   *
   * @type {number}
   * @memberof PokemonFormProps
   */
  index: number;

  /**
   * Pokemon types
   *
   * @type {string[]}
   * @memberof PokemonFormProps
   */
  types: string[];
}

const PokemonForm: FC<PokemonFormProps> = props => {
  const { classes, index, types } = props;
  const color = getSpriteBackground(types);
  const url = getSpriteFormUrl(index);

  return (
    <div className={classes.sprite} style={{ background: color }}>
      <img alt="sprite_form" src={url} />
    </div>
  );
};

export default withStyles(styles)(PokemonForm);
