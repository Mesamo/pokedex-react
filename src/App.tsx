import React, { lazy, Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Loading from './components/Loading';

const PokemonList = lazy(() => import('./containers/PokemonList'));
const PokemonDetail = lazy(() => import('./containers/PokemonDetail'));

export default function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Suspense fallback={<Loading />}>
              <PokemonList />
            </Suspense>
          </Route>
          <Route path="/detail">
            <Suspense fallback={<Loading />}>
              <PokemonDetail />
            </Suspense>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
