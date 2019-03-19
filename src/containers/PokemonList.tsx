import React, { FC, useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import Search from '../components/Search';
import PokemonCard from '../components/PokemonCard';
import PokemonDetail from '../components/PokemonDetail';
import { useOpenDetail } from '../hooks/useOpenDetail';
import { getPokemons } from '../hooks/getPokemons';
import { useVisableAreaSize } from '../hooks/useVisibleAreaSize';

const PokemonList: FC = () => {
  const [search, handleSearch] = useState('');
  const visableAreaSize = useVisableAreaSize(180, 130);
  const [chunkSize, setChunkSize] = useState(visableAreaSize.rowSize);

  const [pokemonsChunk] = getPokemons(search, chunkSize);

  const [open, types, handleOpen, handleClose] = useOpenDetail();

  const { data: pokemons } = pokemonsChunk;

  useEffect(() => {
    setChunkSize(visableAreaSize.rowSize);
  }, [visableAreaSize]);

  console.log(visableAreaSize);

  const renderRow = ({ index, style }: ListChildComponentProps) => (
    <Grid container direction="row" justify="center" style={style}>
      {pokemons[index].map(pokemon => {
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
        height={visableAreaSize.height}
        width={visableAreaSize.width}
        itemCount={pokemonsChunk.length}
        itemSize={200}
      >
        {renderRow}
      </FixedSizeList>
      <PokemonDetail open={open} types={types} handleClose={handleClose} />
    </>
  );
};

export default PokemonList;
