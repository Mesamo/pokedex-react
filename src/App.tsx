import React, { lazy, Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './containers/Header';
import Content from './containers/Content';
import Loading from './components/Loading';

const PokemonList = lazy(() => import('./containers/PokemonList'));

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Content>
        <Suspense fallback={<Loading />}>
          <PokemonList />
        </Suspense>
      </Content>
    </>
  );
}
