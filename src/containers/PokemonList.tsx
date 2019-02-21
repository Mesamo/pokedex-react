import React, { memo, FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Header from '../components/Header';
import Content from '../components/Content';
import PokemonCard from '../components/PokemonCard';
import { getPokemonList } from '../hooks/getPokemonList';

const styles = createStyles({});

interface Props extends RouteComponentProps, WithStyles<typeof styles> {}

const PokemonList: FC<Props> = props => {
  const pokemons = getPokemonList(55);

  const pokemonCards = pokemons.map(pokemon => {
    return <PokemonCard key={pokemon.id} id={pokemon.id} />;
  });

  return (
    <>
      <Header />
      <Content>
        <Grid container direction="row" justify="center">
          {pokemonCards}
        </Grid>
      </Content>
    </>
  );
};

export default memo(withRouter(withStyles(styles)(PokemonList)));
