import { CSSProperties } from 'react';

export class VirtualScrollModel {
  limit: number;
  skip: number;
  style: CSSProperties;

  constructor(limit: number, skip: number, offsetTop: number = 0, offsetBottom: number = 0) {
    this.limit = limit;
    this.skip = skip;
    this.style = {
      marginTop: offsetTop,
      marginBottom: offsetBottom
    };
  }
}
