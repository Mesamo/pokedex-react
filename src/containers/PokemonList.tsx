import React, { FC, useState } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import Search from '../components/Search';
import PokemonCard from '../components/PokemonCard';
import PokemonDetail from '../components/PokemonDetail';
import { useOpenDetail } from '../hooks/useOpenDetail';
import { getPokemons } from '../hooks/getPokemons';

const styles = createStyles({});

interface Props extends WithStyles<typeof styles> {}

const PokemonList: FC<Props> = props => {
  const [search, handleSearch] = useState('');

  const pokemons = getPokemons(search);

  const [open, types, handleOpen, handleClose] = useOpenDetail();

  const pokemonCards = pokemons.map(pokemon => {
    return (
      <PokemonCard
        key={pokemon.id}
        index={pokemon.index}
        name={pokemon.name}
        types={pokemon.types}
        handleOpen={handleOpen}
      />
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
