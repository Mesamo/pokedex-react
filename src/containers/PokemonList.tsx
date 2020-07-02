import React, { FC, memo } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { PokemonModel } from '../models/PokemonModel';
import useFindPokemons from '../database/useFindPokemons';
import { useLoadMore } from '../hooks/useLoadMore';
import PokemonCard from '../components/PokemonCard';

interface PokemonListProps {

  keyword: string;

  handleOpen: (pokemon: PokemonModel) => void;
}


const PokemonList: FC<PokemonListProps> = (props) => {
  const { keyword, handleOpen } = props;
  const pokemons = useFindPokemons(keyword);
  const [visiblePokemons, loadMore] = useLoadMore(pokemons);

  const pokemonCards = visiblePokemons.map(pokemon => {
    return (
      <PokemonCard
        key={pokemon.id}
        pokemon={pokemon}
        handleOpen={handleOpen}
      />
    )
  });

  const loadMoreContent = visiblePokemons.length < pokemons.length
    ? <Button variant="contained" color="primary" onClick={loadMore}>Load More...</Button>
    : <div>No More</div>

  console.log(`renderer PokemonList, pokemons: ${pokemons.length}, visiblePokemons: ${visiblePokemons.length}`);
  return (
    <>
      <Grid container direction="row" justify="center" alignContent="flex-start">
        {pokemonCards}
      </Grid>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        {loadMoreContent}
      </Box>
    </>
  );
};

export default memo(
  PokemonList,
  (prevProps, nextProps) => prevProps.keyword === nextProps.keyword
);
