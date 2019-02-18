import React, { memo, FC } from 'react';
import Grid from '@material-ui/core/Grid';

import PokemonCard from '../components/PokemonCard';
import { getPokemonList } from '../hooks/getPokemonList';

const PokemonList: FC = props => {
  const pokemons = getPokemonList(50);

  return (
    <Grid container direction="row" justify="center">
      {pokemons.map(pokemon => <PokemonCard key={pokemon.id} id={pokemon.id} />)}
    </Grid>
  );
};

export default memo(PokemonList);
