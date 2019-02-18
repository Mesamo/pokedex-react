import { useState, useEffect } from 'react';

import { getPokemonForms } from '../services/pokemon-form';

export function getPokemonList(size: number) {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    console.log('PokemonList init');
    const subscription = getPokemonForms(size).subscribe((data: any) => {
      const pokemonResults = data.results.map((r: any, i: number) => {
        return { id: i + 1, ...r };
      });
      setPokemons(pokemonResults);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return pokemons;
}
