import { useState, useEffect } from 'react';

import { getPokemonById } from '../services/pokemon';

export function getPokemon(id) {
  const [pokemon, setPokemon] = useState({ name: id + '', types: [] });

  useEffect(() => {
    const subscription = getPokemonById(id).subscribe(data => {
      const types = data.types.map(t => t.type.name);
      setPokemon({ name: data.name, types });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [id]);
  return pokemon;
}
