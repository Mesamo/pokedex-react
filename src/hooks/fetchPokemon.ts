import { useState, useEffect } from 'react';
import { RxDocumentTypeWithRev } from 'rxdb';

import { PokemonModel } from '../models/PokemonModel';
import { getPokemonCollections } from '../database';

export type PokemonDoc = RxDocumentTypeWithRev<PokemonModel>;

export function fetchPokemon(search: string): PokemonDoc[] {
  const [pokemons, setPokemons] = useState<PokemonDoc[]>([]);

  const queryOption = {
    $or: [
      { name: { $regex: `.*${search}.*` } },
      { index: { $regex: `.*${search}.*` } }
    ]
  };

  useEffect(() => {
    getPokemonCollections().then(collection => {
      collection
        .find(queryOption)
        .exec()
        .then(result => {
          const data = result.map(d => d.toJSON());
          setPokemons(data);
        })
        .catch(error => {
          console.log(error);
          setPokemons([]);
        });
    });
  }, [search]);

  return pokemons;
}
