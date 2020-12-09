import { FC } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { PokemonModel } from '../models/PokemonModel';
import { useFindPokemons } from '../database/useFindPokemons';
import { useLoadMore } from '../hooks/useLoadMore';
import PokemonCard from '../components/PokemonCard';

interface PokemonListProps {

  keyword: string;

  handleOpen: (pokemon: PokemonModel) => void;
}


const PokemonList: FC<PokemonListProps> = (props) => {
  const { keyword, handleOpen } = props;
  const pokemons = useFindPokemons(keyword);
  const [data, loadMore] = useLoadMore(pokemons);

  console.log(`renderer PokemonList, pokemons: ${pokemons.length}, visiblePokemons: ${data.length}`);
  return (
    <>
      <Grid container direction="row" justify="center" alignContent="flex-start">
        {data.map(p => <PokemonCard key={p.id} pokemon={p} handleOpen={handleOpen} />)}
      </Grid>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        {
          data.length < pokemons.length
            ? <Button variant="contained" color="primary" onClick={loadMore}>Load More...</Button>
            : <div>No More</div>
        }
      </Box>
    </>
  );
};

export default PokemonList;
