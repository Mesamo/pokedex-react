import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './containers/Header';
import Content from './containers/Content';

export default function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <Content />
    </Fragment>
  );
}
