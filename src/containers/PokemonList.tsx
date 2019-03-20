import React, { FC } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import Search from '../components/Search';
import PokemonListRow from '../components/PokemonListRow';
import PokemonDetail from '../components/PokemonDetail';
import { useOpenDetail } from '../hooks/useOpenDetail';
import { usePokemonChunk } from '../hooks/usePokemonChunk';

const PokemonList: FC = () => {
  const [pokemonChunk, handleSearch, height, width] = usePokemonChunk();
  const [open, types, handleOpen, handleClose] = useOpenDetail();

  const renderRow = ({ index, style, data }: ListChildComponentProps) => (
    <PokemonListRow style={style} data={data.chunk[index]} handleOpen={handleOpen} />
  );

  return (
    <>
      <Search onSearch={handleSearch} />
      <FixedSizeList
        height={height}
        width={width}
        itemCount={pokemonChunk.length}
        itemData={pokemonChunk}
        itemSize={200}
      >
        {renderRow}
      </FixedSizeList>
      <PokemonDetail open={open} types={types} handleClose={handleClose} />
    </>
  );
};

export default PokemonList;
