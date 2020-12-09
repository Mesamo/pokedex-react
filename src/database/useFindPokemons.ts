import { useState, useEffect } from 'react';
import { RxDocumentTypeWithRev, MangoQuery } from 'rxdb';

import { PokemonModel } from '../models/PokemonModel';
import useRxCollection from '../database/useRxCollection';

export type PokemonDoc = RxDocumentTypeWithRev<PokemonModel>;

export function useFindPokemons(keyword: string) {
  const [pokemons, setPokemons] = useState<PokemonModel[]>([]);
  const collection = useRxCollection<PokemonModel>('pokemons');

  useEffect(() => {
    if (collection) {
      const queryOption: MangoQuery<PokemonDoc> = {
        selector: {
          $or: [
            { name: { $regex: `.*${keyword}.*` } },
            { index: { $regex: `.*${keyword}.*` } }
          ]
        }
      };
      collection
        .find(queryOption)
        .exec()
        .then(result => {
          const data = result.map(d => d.toJSON());
          setPokemons(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [collection, keyword]);

  return pokemons;
}
