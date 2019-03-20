export class ChunkModel<T> {
  chunk: T[][];

  get length(): number {
    return this.chunk.length;
  }

  constructor(chunk: T[][] = []) {
    this.chunk = chunk;
  }
}
