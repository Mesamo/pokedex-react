import { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { PokemonModel } from '../models/PokemonModel';

const useStyles = makeStyles({
  content: {
    width: 500,
    height: '100%',
    backgroundColor: '#fff'
  }
});

interface PokemonDetailProps {
  pokemon: PokemonModel;
}

const PokemonDetail: FC<PokemonDetailProps> = props => {
  const { pokemon } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.content} elevation={3}>
      <Typography>
        {pokemon.name}
      </Typography>
    </Paper>
  );
};

export default PokemonDetail;
