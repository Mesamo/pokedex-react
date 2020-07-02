import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './containers/Header';
import Content from './containers/Content';
import Pokedex from './containers/Pokedex';
// import Test from './containers/Test';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Content>
        <Pokedex />
      </Content>
      {/* <Test /> */}
    </>
  );
}
