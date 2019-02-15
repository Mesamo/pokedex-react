import React, { memo, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import PokemonCard from '../components/PokemonCard';
import { getPokemonForms } from '../services/pokemon-form';

const PokemonList = props => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    console.log('PokemonList init');
    const subscription = getPokemonForms(151).subscribe(data => {
      const pokemonResults = data.results.map((r, i) => {
        return { id: i + 1, ...r };
      });
      setPokemons(pokemonResults);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <Grid container direction="row" justify="center">
      {pokemons.map(pokemon => <PokemonCard key={pokemon.id} id={pokemon.id} />)}
    </Grid>
  );
}

export default memo(PokemonList);
