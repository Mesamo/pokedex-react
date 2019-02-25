import { useState } from 'react';

export function useOpenDetail(): [boolean, () => void, () => void] {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return [open, handleOpen, handleClose];
}
