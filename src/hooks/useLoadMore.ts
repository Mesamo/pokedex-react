import { useState, useEffect } from 'react';

import { getVisibleCount } from '../utils/getVisibleCount';

export function useLoadMore<T = any>(data: T[]): [T[], () => void] {
  const totalCount = data.length;
  const count = getVisibleCount(180, 204);
  const [size, setSize] = useState(count);

  useEffect(() => {
    setSize(getVisibleCount(180, 204));
  }, [data]);

  const loadMore = () => {
    if (size + count > totalCount) {
      setSize(totalCount);
    } else {
      setSize(size + count);
    }
  }
  const result = data.slice(0, size);
  return [result, loadMore];
}
