import { useState, useEffect } from 'react';

import { getPokemonById } from '../services/pokemon';

export function getPokemon(id: number) {
  const [pokemon, setPokemon] = useState({ name: id + '', types: [] });

  useEffect(() => {
    const subscription = getPokemonById(id).subscribe(data => {
      const types = data.types.map((t: any) => t.type.name);
      setPokemon({ name: data.name, types });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [id]);
  return pokemon;
}
