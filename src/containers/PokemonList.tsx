import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Search from '../components/Search';
import PokemonCard from '../components/PokemonCard';
import PokemonDetail from '../components/PokemonDetail';
import { getPokemonList } from '../hooks/getPokemonList';
import { useOpenDetail } from '../hooks/useOpenDetail';

const styles = createStyles({});

interface Props extends WithStyles<typeof styles> {}

const PokemonList: FC<Props> = props => {
  const pokemons = getPokemonList(5);

  const [open, types, handleOpen, handleClose] = useOpenDetail();

  const handleSearch = (value: string) => {
    console.log(value);
  }

  const pokemonCards = pokemons.map(pokemon => {
    return (
      <PokemonCard key={pokemon.id} id={pokemon.id} handleOpen={handleOpen} />
    );
  });

  return (
    <>
      <Search onSearch={handleSearch} />
      <Grid container direction="row" justify="center">
        {pokemonCards}
      </Grid>
      <PokemonDetail open={open} types={types} handleClose={handleClose} />
    </>
  );
};

export default withStyles(styles)(PokemonList);
