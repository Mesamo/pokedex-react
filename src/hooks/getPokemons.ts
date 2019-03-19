import { useEffect } from 'react';
import { RxDocumentTypeWithRev } from 'rxdb';

import { ChunkModel } from '../models/ChunkModel';
import { PokemonModel } from '../models/PokemonModel';
import { getPokemonCollections } from '../database';
import useArrayChunk from './useArrayChunk';

export type PokemonDoc = RxDocumentTypeWithRev<PokemonModel>;

export function getPokemons(
  search: string,
  chunkSize: number = 10
): [ChunkModel<PokemonDoc>] {
  const [chunkData, loadData] = useArrayChunk<
    PokemonDoc
  >(chunkSize);

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

  return [chunkData];
}
