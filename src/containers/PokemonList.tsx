import React, { FC } from 'react';
import Grid from '@material-ui/core/Grid';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import Search from '../components/Search';
import PokemonCard from '../components/PokemonCard';
import PokemonDetail from '../components/PokemonDetail';
import { useOpenDetail } from '../hooks/useOpenDetail';
import { usePokemonChunk } from '../hooks/usePokemonChunk';

const PokemonList: FC = () => {
  const [pokemonChunk, handleSearch, height, width] = usePokemonChunk();
  const [open, types, handleOpen, handleClose] = useOpenDetail();

  console.log('qwe');

  const renderRow = ({ index, style }: ListChildComponentProps) => (
    <Grid container direction="row" justify="center" style={style}>
      {pokemonChunk.data[index].map(pokemon => {
        return (
          <PokemonCard
            key={pokemon.id}
            index={pokemon.index}
            name={pokemon.name}
            types={pokemon.types}
            handleOpen={handleOpen}
          />
        );
      })}
    </Grid>
  );

  return (
    <>
      <Search onSearch={handleSearch} />
      <FixedSizeList
        height={height}
        width={width}
        itemCount={pokemonChunk.length}
        itemSize={200}
      >
        {renderRow}
      </FixedSizeList>
      <PokemonDetail open={open} types={types} handleClose={handleClose} />
    </>
  );
};

export default PokemonList;
