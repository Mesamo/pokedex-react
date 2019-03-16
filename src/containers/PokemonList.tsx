import React, { FC, useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Search from '../components/Search';
import PokemonCard from '../components/PokemonCard';
import PokemonDetail from '../components/PokemonDetail';
import Operations from '../components/Operations';
import { useOpenDetail } from '../hooks/useOpenDetail';
import { getPokemons, PokemonDoc } from '../hooks/getPokemons';

const PokemonList: FC = () => {
  const [search, handleSearch] = useState('');

  const [pokemonsChunk, loadNext, loadPrev] = getPokemons(search, 20);

  const [open, types, handleOpen, handleClose] = useOpenDetail();

  const renderCard = (pokemon: PokemonDoc) => (
    <PokemonCard
      key={pokemon.id}
      index={pokemon.index}
      name={pokemon.name}
      types={pokemon.types}
      handleOpen={handleOpen}
    />
  );

  const { data: pokemons } = pokemonsChunk;

  return (
    <>
      <Search onSearch={handleSearch} />
      <Grid container direction="row" justify="center">
        {pokemons.map(pokemon => renderCard(pokemon))}
      </Grid>
      <Operations onNext={loadNext} onPrev={loadPrev} />
      <PokemonDetail open={open} types={types} handleClose={handleClose} />
    </>
  );
};

export default PokemonList;
