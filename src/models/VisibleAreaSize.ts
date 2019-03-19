export class VisibleAreaSize {
  height: number;
  width: number;
  itemWidth: number;

  get rowSize(): number {
    return Math.floor(this.width / this.itemWidth);
  }

  constructor(height: number = 0, width: number = 0, itemWidth: number = 0) {
    this.height = height;
    this.width = width;
    this.itemWidth = itemWidth;
  }
}
