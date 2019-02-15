import { useState, useEffect } from 'react';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { getPokemonById } from '../services/pokemon';
import { getPokemonFormById } from '../services/pokemon-form';

export function usePokemonCard(id) {
  const [pokemonName, setPokemonName] = useState(id);
  const [pokemonForm, setPokemonForm] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    const subject = new Subject();
    getPokemonFormById(id)
      .pipe(takeUntil(subject))
      .subscribe(data => {
        setPokemonForm(data.sprites.front_default);
      });
    getPokemonById(id)
      .pipe(takeUntil(subject))
      .subscribe(data => {
        const types = data.types.map(t => t.type.name);
        setPokemonName(data.name);
        setPokemonTypes(types);
      });
    return () => {
      subject.next(true);
      subject.complete();
    };
  }, [id]);

  return [pokemonName, pokemonForm, pokemonTypes];
}
