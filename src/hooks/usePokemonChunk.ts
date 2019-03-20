import { useMemo } from 'react';

import { ChunkModel } from '../models/ChunkModel';
import { useVisableAreaSize } from './useVisibleAreaSize';
import { fetchPokemon, PokemonDoc } from './fetchPokemon';
import chunk from '../utils/chunk';

export function usePokemonChunk(
  search: string
): [ChunkModel<PokemonDoc>, number, number] {
  const pokemons = fetchPokemon(search);
  const visableAreaSize = useVisableAreaSize(180, 130);

  const chunkData = useMemo(() => {
    if (pokemons.length > 0) {
      const data = chunk(pokemons, visableAreaSize.rowSize);
      return new ChunkModel(data);
    } else {
      return new ChunkModel<PokemonDoc>();
    }
  }, [pokemons, visableAreaSize]);

  return [chunkData, visableAreaSize.height, visableAreaSize.width];
}
