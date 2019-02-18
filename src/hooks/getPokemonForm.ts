import { useState, useEffect } from 'react';

import { getPokemonFormById } from '../services/pokemon-form';

export function getPokemonForm(id: number) {
  const [pokemonForm, setPokemonForm] = useState('');

  useEffect(() => {
    const subscription = getPokemonFormById(id).subscribe(data => {
      setPokemonForm(data.sprites.front_default);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [id]);

  return pokemonForm;
}
