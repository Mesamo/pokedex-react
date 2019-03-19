export class ChunkModel<T> {
  data: T[][];

  get length(): number {
    return this.data.length;
  }

  constructor(data: T[][] = []) {
    this.data = data;
  }
}
