import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './containers/Header';
import Content from './containers/Content';
import Pokedex from './containers/Pokedex';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Content>
        <Pokedex />
      </Content>
    </>
  );
}
