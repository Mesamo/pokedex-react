import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { RxDocumentTypeWithRev } from 'rxdb';

import { PokemonModel } from '../models/PokemonModel';
import { ChunkModel } from '../models/ChunkModel';
import { fetchPokemon } from './fetchPokemon';
import { useVisableAreaSize } from './useVisibleAreaSize';
import chunk from '../utils/chunk';

export type PokemonDoc = RxDocumentTypeWithRev<PokemonModel>;

export function usePokemonChunk(): [
  ChunkModel<PokemonDoc>,
  Dispatch<SetStateAction<string>>,
  number,
  number
] {
  const [chunkData, setChunkData] = useState(new ChunkModel<PokemonDoc>());
  const [pokemons, handleSearch] = fetchPokemon();
  const visableAreaSize = useVisableAreaSize(180, 130);

  useEffect(() => {
    if (pokemons.length > 0) {
      const data = chunk(pokemons, visableAreaSize.rowSize);
      setChunkData(new ChunkModel(data));
    }
  }, [pokemons, visableAreaSize]);

  console.log(chunkData);
  return [
    chunkData,
    handleSearch,
    visableAreaSize.height,
    visableAreaSize.width
  ];
}
