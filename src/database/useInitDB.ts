import { useState, useEffect } from 'react';
import { createRxDatabase, addRxPlugin, RxDatabase, RxCollection, CollectionsOfDatabase } from 'rxdb';

import { PokemonModel } from '../models/PokemonModel';
import { PokemonSchema } from './PokemonSchema';
import { getPokemons } from '../services/pokemons';

const collectionName = 'pokemons';

type OrmMethods = {};
type StaticMethods = { [key: string]: any };
type Collection = RxCollection<PokemonModel, OrmMethods, StaticMethods>;

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

function upsertPokemons(collection: Collection, pokemons: PokemonModel[], setPercent: (value: string) => void) {
  return collection
    .find()
    .where('id')
    .in(pokemons.map(p => p.id))
    .exec()
    .then(exists => {
      return pokemons.filter(pokemon => !exists.some(e => e.id === pokemon.id));
    })
    .then(missing => {
      const total = missing.length;
      if (total === 0) {
        setPercent(`1/1`);
      }
      const bulk = missing.map((pokemon, index) => {
        return collection.atomicUpsert(pokemon).then(() => {
          setPercent(`${index + 1}/${total}`);
        });
      })
      return Promise.all(bulk);
    });
}

export function useInitDB(): [RxDatabase<CollectionsOfDatabase> | undefined, string] {
  const [db, setDB] = useState<RxDatabase>();
  const [percent, setPercent] = useState<string>('0/1');

  useEffect(() => {
    addRxPlugin(require('pouchdb-adapter-idb'));
    const start = new Date().getTime();
    console.log('init start');
    Promise.all([
      initCollection(),
      getPokemons()
    ])
    .then(([collection, pokemons]) => {
      return Promise.all([
        collection,
        upsertPokemons(collection, pokemons, setPercent)
      ])
    })
    .then(([collection]) => {
      const db = collection.database
      setDB(db);
      const end = new Date().getTime();
      const duration = (end - start) / 1000;
      console.log(`init end ${duration}s`);
    });
  }, []);

  return [db, percent];
}
