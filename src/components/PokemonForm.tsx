import { FC } from 'react';
import { makeStyles } from '@material-ui/core';

import { getSpriteBackground } from '../utils/getSpriteBackground';
import { usePokemonForm } from '../database/usePokemonForm';

const useStyles = makeStyles({
  sprite: {
    height: 140,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

interface PokemonFormProps {
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
  const { id, types } = props;
  const classes = useStyles();
  const form = usePokemonForm(id);
  const color = getSpriteBackground(types);

  return (
    <div className={classes.sprite} style={{ background: color }}>
      {form ? <img alt="sprite_form" src={URL.createObjectURL(form)} /> : ''}
    </div>
  );
};

export default PokemonForm;
