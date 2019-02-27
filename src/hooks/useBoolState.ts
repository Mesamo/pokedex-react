import { useState } from 'react';

export function useBoolState(
  init: boolean = false
): [boolean, () => void, () => void] {
  const [state, setState] = useState(init);
  const toggleTrue = () => {
    setState(true);
  };
  const toggleFalse = () => {
    setState(false);
  };
  return [state, toggleTrue, toggleFalse];
}
