import { useState } from 'react';

import { ChunkModel } from '../models/ChunkModel';
import chunk from '../utils/chunk';

export default function useArrayChunk<T>(
  size: number
): [T[], boolean, () => void, (data: T[]) => void] {
  const initData = new ChunkModel<T>();
  const [chunkData, setChunkData] = useState(initData);

  const loadMore = () => {
    if (chunkData.chunk.length === 0) {
      return;
    }
    if (chunkData.index < chunkData.chunk.length) {
      const index = chunkData.index + 1;
      const newData = new ChunkModel(chunkData.chunk, index);
      setChunkData(newData);
    }
  };

  const loadData = (data: T[]) => {
    const chunkArray = chunk(data, size);
    const model = new ChunkModel(chunkArray, 0);
    setChunkData(model);
  };

  return [chunkData.data, chunkData.hasMore, loadMore, loadData];
}
