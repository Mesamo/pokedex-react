import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  name: {
    textTransform: 'capitalize'
  }
};

const PokemonName = props => {
  const { classes, name } = props;
  return (
    <Typography align="center" className={classes.name}>
      {name}
    </Typography>
  );
};

PokemonName.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
};

export default memo(withStyles(styles)(PokemonName));
