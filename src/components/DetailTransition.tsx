import React, { FC } from 'react';
import Zoom from '@material-ui/core/Zoom';

const DetailTransition: FC = props => {
  return <Zoom in={true} {...props} />;
}

export default DetailTransition;
