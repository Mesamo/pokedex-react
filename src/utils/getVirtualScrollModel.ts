import { VirtualScrollModel } from '../models/VirtualScrollModel';

export function getVirtualScrollModel(
  itemWidth: number,
  itemHeight: number,
  count: number,
  topOffset: number,
  rightOffset: number = 20,
  overScan: number = 1
): VirtualScrollModel {

  const height = window.innerHeight - topOffset;
  const width = window.innerWidth - rightOffset;
  const scrollTop = document.documentElement.scrollTop;
  const cols = Math.floor(width / itemWidth);

  const totalRows = Math.ceil(count / cols);
  const visibleRows = Math.floor(height / itemHeight);
  const topVirtualRows = Math.floor(scrollTop / itemHeight);
  const bottomVirtualRows = totalRows - visibleRows - topVirtualRows;

  const skip = topVirtualRows * cols;
  const limit = visibleRows * cols;
  const offsetTop = scrollTop;
  const offsetBottom = bottomVirtualRows * itemHeight;
  const model = new VirtualScrollModel(limit, skip, offsetTop, offsetBottom);
  console.log(model);
  return model;
}
