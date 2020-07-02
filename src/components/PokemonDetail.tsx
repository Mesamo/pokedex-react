import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Skeleton from '@material-ui/lab/Skeleton';
// import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

import { PokemonModel } from '../models/PokemonModel';

const styles = createStyles({
  content: {
    width: 500,
    height: '100%',
    backgroundColor: '#fff'
  }
});

interface PokemonDetailProps extends WithStyles<typeof styles> {
  pokemon: PokemonModel;
}

const PokemonDetail: FC<PokemonDetailProps> = props => {
  const { classes, pokemon } = props;

  return (
    <Paper className={classes.content} elevation={3}>
      <Typography>
        {pokemon.name}
      </Typography>
    </Paper>
  );
};

export default withStyles(styles)(PokemonDetail);
