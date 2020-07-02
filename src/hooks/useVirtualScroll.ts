import { useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

import { VirtualScrollModel } from '../models/VirtualScrollModel';
import { getVirtualScrollModel } from '../utils/getVirtualScrollModel';


export function useVirtualScroll(count: number): VirtualScrollModel {
  const [model, setModel] = useState(getVirtualScrollModel(180, 204, count, 130, 20));

  useEffect(() => {

    const onResizeOrScroll = throttle(() => {
      setModel(getVirtualScrollModel(180, 204, count, 130, 20));
    }, 1000);

    window.addEventListener('resize', onResizeOrScroll);
    window.addEventListener('scroll', onResizeOrScroll);

    return () => {
      window.removeEventListener('resize', onResizeOrScroll);
      window.removeEventListener('scroll', onResizeOrScroll);
    };
  })

  return model;
}
