import React, { memo, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import PokemonCard from '../components/PokemonCard';

const PokemonList = props => {
  const [pokemons] = useState([]);

  useEffect(() => {
    console.log('PokemonList init');
    return () => {};
  });

  return (
    <Grid container direction="row" justify="center">
      {
        pokemons.map(pokemon => {
          const prop = {
            id: pokemon._id,
            name: pokemon.name,
            types: pokemon.types.map(type => type.name)
          }
          return <PokemonCard key={pokemon._id} {...prop} />
        })
      }
    </Grid>
  );
}

export default memo(PokemonList);
