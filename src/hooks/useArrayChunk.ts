import { useState, useEffect } from 'react';

import { ChunkModel } from '../models/ChunkModel';
import chunk from '../utils/chunk';

export default function useArrayChunk<T>(
  size: number
): [ChunkModel<T>, (data: T[]) => void] {
  const initData = new ChunkModel<T>([]);
  const [chunkData, setChunkData] = useState(initData);

  useEffect(() => {
    const data = chunkData.data.flatMap(d => d);
    setChunkData(new ChunkModel(chunk(data, size)));
  }, [size])

  const loadData = (data: T[]) => {
    setChunkData(new ChunkModel(chunk(data, size)));
  };

  return [chunkData, loadData];
}
