import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  containerId: string;
}

const Portal: React.FC<PortalProps> = ({ children, containerId }) => {
  const root = document.getElementById(containerId);
  const container = document.createElement('div');
  useEffect(() => {
    root && root.appendChild(container);
    return () => {
      root && root.removeChild(container);
    };
  }, [root, container]);
  return ReactDOM.createPortal(children, container);
};

export default Portal;
