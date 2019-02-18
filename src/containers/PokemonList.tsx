import React, { memo, useState, useEffect, FC } from 'react';
import Grid from '@material-ui/core/Grid';

import PokemonCard from '../components/PokemonCard';
import { getPokemonForms } from '../services/pokemon-form';

const PokemonList: FC = props => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    console.log('PokemonList init');
    const subscription = getPokemonForms(1).subscribe((data: any) => {
      const pokemonResults = data.results.map((r: any, i: number) => {
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
};

export default memo(PokemonList);
