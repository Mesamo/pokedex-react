export class ChunkModel<T> {
  chunk: T[][];
  index: number;

  get data(): T[] {
    if (this.chunk.length === 0) {
      return [];
    } else {
      return this.chunk.slice(0, this.index + 1).flatMap(d => d);
    }
  }

  get hasMore(): boolean {
    return this.index + 1 < this.chunk.length;
  }

  constructor(chunk: T[][] = [], index: number = 0) {
    this.index = index;
    this.chunk = chunk;
  }
}
