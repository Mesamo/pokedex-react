import React, { Fragment } from 'react';

import Header from './containers/Header';
import Content from './containers/Content';

export default function App() {
  return (
    <Fragment>
      <Header />,
      <Content />
    </Fragment>
  );
}
