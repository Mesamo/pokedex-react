import { Dispatch, SetStateAction, useMemo } from 'react';

import { ChunkModel } from '../models/ChunkModel';
import { useVisableAreaSize } from './useVisibleAreaSize';
import { fetchPokemon, PokemonDoc } from './fetchPokemon';
import chunk from '../utils/chunk';

export function usePokemonChunk(): [
  ChunkModel<PokemonDoc>,
  Dispatch<SetStateAction<string>>,
  number,
  number
] {
  const [pokemons, handleSearch] = fetchPokemon();
  const visableAreaSize = useVisableAreaSize(180, 130);

  const chunkData = useMemo(() => {
    if (pokemons.length > 0) {
      const data = chunk(pokemons, visableAreaSize.rowSize);
      return new ChunkModel(data);
    } else {
      return new ChunkModel<PokemonDoc>();
    }
  }, [pokemons, visableAreaSize]);

  return [
    chunkData,
    handleSearch,
    visableAreaSize.height,
    visableAreaSize.width
  ];
}
