import { useState } from 'react';

import { useBoolState } from './useBoolState';

export function useOpenDetail<T = any>(): [
  boolean,
  T | undefined,
  (data: T) => void,
  () => void
] {
  const [open, openFn, closeFn] = useBoolState();
  const [data, setData] = useState<T | undefined>(undefined);

  const handleOpen = (d: T) => {
    setData(d);
    openFn();
  };

  const handleClose = () => {
    closeFn();
  };

  return [open, data, handleOpen, handleClose];
}
