import { useState } from 'react';

import { ChunkModel } from '../models/ChunkModel';
import chunk from '../utils/chunk';

export default function useArrayChunk<T>(
  size: number
): [ChunkModel<T>, (data: T[]) => void, () => void, () => void] {
  const initData = new ChunkModel<T>();
  const [chunkData, setChunkData] = useState(initData);

  const loadPrev = () => {
    if (chunkData.index > 0 && chunkData.index < chunkData.chunk.length - 1) {
      setChunkData(new ChunkModel(chunkData.chunk, chunkData.index - 1));
    }
  };

  const loadNext = () => {
    if (chunkData.index < chunkData.chunk.length - 1) {
      setChunkData(new ChunkModel(chunkData.chunk, chunkData.index + 1));
    }
  };

  const loadData = (data: T[]) => {
    setChunkData(new ChunkModel(chunk(data, size), 0));
  };

  return [chunkData, loadData, loadNext, loadPrev];
}
