import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { getPokemonForm } from '../hooks/getPokemonForm';
import { getSpriteBackground } from '../utils/getSpriteBackground';

const styles = {
  sprite: {
    height: '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const PokemonForm = props => {
  const { classes, id, types } = props;
  const color = getSpriteBackground(types);
  const form = getPokemonForm(id);
  return (
    <div className={classes.sprite} style={{ background: color }}>
      <img alt="sprite_form" src={form} />
    </div>
  );
};

PokemonForm.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  types: PropTypes.array.isRequired
};

export default memo(withStyles(styles)(PokemonForm));
