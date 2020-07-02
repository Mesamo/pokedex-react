export function getVisibleCount(
  itemWidth: number,
  itemHeight: number,
  topOffset: number = 130,
  rightOffset: number = 20
) {
  const height = window.innerHeight - topOffset;
  const width = window.innerWidth - rightOffset;
  const cols = Math.floor(width / itemWidth);
  const visibleRows = Math.floor(height / itemHeight);
  return cols * visibleRows;
}
