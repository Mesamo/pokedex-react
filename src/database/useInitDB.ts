import { useState, useEffect } from 'react';
import { createRxDatabase, addRxPlugin, RxDatabase, RxCollection } from 'rxdb';

import { PokemonModel } from '../models/PokemonModel';
import { PokemonSchema } from './PokemonSchema';
import { getPokemons } from '../services/pokemons';

const collectionName = 'pokemons';

type OrmMethods = {};
type StaticMethods = { [key: string]: any };

function initCollection() {
  return createRxDatabase({
    name: 'pokemons_db',
    adapter: 'idb',
  }).then((database) => {
    return database.collection<PokemonModel, OrmMethods, StaticMethods>({
      name: collectionName,
      schema: PokemonSchema
    });
  });
}

function upsertPokemons(collection: RxCollection<PokemonModel, OrmMethods, StaticMethods>, pokemons: PokemonModel[]) {
  return collection
    .find()
    .where('id')
    .in(pokemons.map(p => p.id))
    .exec()
    .then(exists => {
      return pokemons.filter(pokemon => !exists.some(e => e.id === pokemon.id));
    })
    .then(missing => {
      const bulk = missing.map(pokemon => {
        return collection.atomicUpsert(pokemon);
      })
      return Promise.all(bulk);
    });
}

export function useInitDB() {
  const [db, setDB] = useState<RxDatabase>();

  useEffect(() => {
    addRxPlugin(require('pouchdb-adapter-idb'));
    console.log('init start' + new Date().getSeconds());
    Promise.all([
      initCollection(),
      getPokemons()
    ])
    .then(([collection, pokemons]) => {
      return Promise.all([
        collection,
        upsertPokemons(collection, pokemons)
      ])
    })
    .then(([collection]) => {
      const db = collection.database
      setDB(db);
      console.log('init end' + new Date().getSeconds());
    });
  }, []);

  return db;
}
