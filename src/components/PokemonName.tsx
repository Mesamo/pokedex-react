import React, { memo, FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = createStyles({
  name: {
    textTransform: 'capitalize'
  }
});

interface PokemonNameProps extends WithStyles<typeof styles> {

  /**
   * Pokemon name
   *
   * @type {string}
   * @memberof PokemonNameProps
   */
  name: string;
}

const PokemonName: FC<PokemonNameProps> = props => {
  const { classes, name } = props;
  return (
    <Typography align="center" className={classes.name}>
      {name}
    </Typography>
  );
};

export default memo(withStyles(styles)(PokemonName));
