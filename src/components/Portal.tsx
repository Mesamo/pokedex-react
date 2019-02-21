import React, { memo, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
}

const Portal: React.FC<PortalProps> = props => {
  const { children } = props;
  console.log('renderer');
  const root = document.getElementById('modal');
  const container = document.createElement('div');
  useEffect(() => {
    if (root) {
      root.appendChild(container);
    }
    return () => {
      if (root) {
        root.removeChild(container);
      }
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default memo(Portal);
