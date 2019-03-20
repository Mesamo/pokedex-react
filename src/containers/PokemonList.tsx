import React, { FC, useState } from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import Search from '../components/Search';
import PokemonListRow from '../components/PokemonListRow';
import PokemonDetail from '../components/PokemonDetail';
import { useOpenDetail } from '../hooks/useOpenDetail';
import { usePokemonChunk } from '../hooks/usePokemonChunk';

const PokemonList: FC = () => {
  const [search, setSearch] = useState('');
  const [pokemonChunk, height, width] = usePokemonChunk(search);
  const [open, types, handleOpen, handleClose] = useOpenDetail();

  const renderRow = ({ index, style, data }: ListChildComponentProps) => (
    <PokemonListRow
      style={style}
      data={data.chunk[index]}
      handleOpen={handleOpen}
    />
  );

  console.log('renderer');
  return (
    <>
      <Search onSearch={setSearch} />
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
