import React, { lazy, Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Loading from './components/Loading';

const PokemonList = lazy(() => import('./containers/PokemonList'));

export default function App() {
  return (
    <>
      <CssBaseline />
      <Suspense fallback={<Loading />}>
        <PokemonList />
      </Suspense>
    </>
  );
}
