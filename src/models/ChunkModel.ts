export class ChunkModel<T> {
  chunk: T[][];
  index: number;
  step: number;

  get endIndex(): number {
    return this.index + this.step;
  }

  get data(): T[] {
    if (this.chunk.length === 0) {
      return [];
    } else {
      return this.chunk.slice(this.index, this.endIndex).flatMap(d => d);
    }
  }

  get startOffset(): number {
    return this.index;
  }

  get endOffset(): number {
    return this.chunk.length - this.endIndex;
  }

  constructor(chunk: T[][] = [], index: number = 0, step: number = 1) {
    this.index = index;
    this.chunk = chunk;
    this.step = step;
  }
}
