import { useState, useEffect } from 'react';
import { RxDocumentTypeWithRev } from 'rxdb';

import { PokemonModel } from '../models/PokemonModel';
import { getPokemonCollections } from '../database';

type Pokemons = RxDocumentTypeWithRev<PokemonModel>[];

export function getPokemons(search: string) {
  const [pokemons, setPokemons] = useState<Pokemons>([]);

  const queryOption = {
    $or: [
      { name: { $regex: `.*${search}.*` } },
      { index: { $regex: `.*${search}.*` } }
    ]
  }

  useEffect(() => {
    getPokemonCollections().then(collection => {
      collection.find(queryOption)
        .exec()
        .then(result => {
          const pokes = result.map(d => d.toJSON()).slice(0, 10);
          setPokemons(pokes);
        });
    });
  }, [search]);

  return pokemons;
}
