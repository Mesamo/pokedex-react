import { useState } from 'react';

import { useBoolState } from './useBoolState';

export function useOpenDetail(): [
  boolean,
  string[],
  (types: string[]) => void,
  () => void
] {
  const [open, openFn, closeFn] = useBoolState();
  const [types, setTypes] = useState<string[]>([]);

  const handleOpen = (types: string[]) => {
    setTypes(types);
    openFn();
  };

  const handleClose = () => {
    closeFn();
  };

  return [open, types, handleOpen, handleClose];
}
