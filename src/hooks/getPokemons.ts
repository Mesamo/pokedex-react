import { useEffect } from 'react';
import { RxDocumentTypeWithRev } from 'rxdb';

import { PokemonModel } from '../models/PokemonModel';
import { getPokemonCollections } from '../database';
import useArrayChunk from './useArrayChunk';

type PokemonDoc = RxDocumentTypeWithRev<PokemonModel>;

export function getPokemons(search: string): [PokemonDoc[], boolean, () => void] {
  const chunkSize = 20;

  const [pokes, hasMore, loadMore, loadData] = useArrayChunk<PokemonDoc>(chunkSize);

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
          loadData(data);
        })
        .catch(error => {
          console.log(error);
          loadData([]);
        });
    });
  }, [search]);

  return [pokes, hasMore, loadMore];
}
