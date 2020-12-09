import { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';

import { getSpriteBackground } from '../utils/getSpriteBackground';
import { usePokemonForm } from '../database/usePokemonForm';

const styles = createStyles({
  sprite: {
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

interface PokemonFormProps extends WithStyles<typeof styles> {
  id: string;

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
  const { classes, id, types } = props;
  const color = getSpriteBackground(types);
  const form = usePokemonForm(id);

  return (
    <div className={classes.sprite} style={{ background: color }}>
      {form ? <img alt="sprite_form" src={URL.createObjectURL(form)} /> : ''}
    </div>
  );
};

export default withStyles(styles)(PokemonForm);
