import { useState, useEffect } from 'react';
import { RxDocumentTypeWithRev, MangoQuery } from 'rxdb';

import { PokemonModel } from '../models/PokemonModel';
import useRxCollection from '../database/useRxCollection';

export type PokemonDoc = RxDocumentTypeWithRev<PokemonModel>;

export default function(keyword: string) {
  const [pokemons, setPokemons] = useState<PokemonDoc[]>([]);
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
        })
        .finally(() => {
          // console.log(`useSearchPokemons end`);
        });
    }
  }, [collection, keyword]);

  return pokemons;
}
