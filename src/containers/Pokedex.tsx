import React, { FC, useState } from 'react';
import { RxDatabase } from 'rxdb';

import { PokemonModel } from '../models/PokemonModel';
import { useOpenDetail } from '../hooks/useOpenDetail';
import Search from '../components/Search';
import Loading from '../components/Loading';
import PokemonDialog from '../components/PokemonDialog';
import PokemonList from './PokemonList';
import Provider from '../database/Provider';
import { useInitDB } from '../database/useInitDB';

// import { useDatabase } from '../hooks/useDatabase';

const Pokedex: FC = () => {
  // const completed = useDatabase();
  const db = useInitDB();
  const [keyword, setKeyword] = useState('');
  const [open, data, handleOpen, handleClose] = useOpenDetail<PokemonModel>();

  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
  };

  // const content = completed
  //   ? <PokemonList keyword={keyword} handleOpen={handleOpen} />
  //   : <Loading />

  const renderContent = (db: RxDatabase) => {
    return (
      <Provider db={db} idAttribute="id" >
        <PokemonList keyword={keyword} handleOpen={handleOpen} />
        <PokemonDialog open={open} pokemon={data} handleClose={handleClose} />
      </Provider>
    )
  }

  console.log('Pokedex renderer');
  return (
    <>
      <Search onSearch={handleSearch} />
      {db ? renderContent(db) : <Loading />}
      <PokemonDialog open={open} pokemon={data} handleClose={handleClose} />
    </>
  )
};

export default Pokedex;
