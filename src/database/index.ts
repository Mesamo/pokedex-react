import * as RxDB from 'rxdb';

import { PokemonModel } from '../models/PokemonModel';
import { PokemonSchema } from './PokemonSchema';

RxDB.QueryChangeDetector.enableDebugging();
RxDB.plugin(require('pouchdb-adapter-idb'));

let DB: RxDB.RxDatabase | null = null;

const collectionName = 'pokemons';

export async function createDB() {
  if (!DB) {
    DB = await RxDB.create({
      name: 'pokemons_db',
      adapter: 'idb'
    });
  }

  return DB;
}

export async function getPokemonCollections() {
  const db = await createDB();

  if (db[collectionName]) {
    return db[collectionName];
  } else {
    const collection = await db.collection<PokemonModel, {}, {}>({
      name: collectionName,
      schema: PokemonSchema
    });


    return collection;
  }
}
