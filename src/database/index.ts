import { createRxDatabase, RxDatabase, RxCollection, addRxPlugin } from 'rxdb';

import { PokemonModel } from '../models/PokemonModel';
import { PokemonSchema } from './PokemonSchema';

let DB: RxDatabase | null = null;
addRxPlugin(require('pouchdb-adapter-idb'));

type OrmMethods = {};
type StaticMethods = { [key: string]: any };
type PokemonCollection = RxCollection<PokemonModel, OrmMethods, StaticMethods>;

const collectionName = 'pokemons';

export async function createDB() {
  if (!DB) {
    DB = await createRxDatabase({
      name: 'pokemons_db',
      adapter: 'idb',
    });
  }

  return DB;
}

export async function getPokemonCollections(): Promise<PokemonCollection> {
  const db = await createDB();

  let collection: PokemonCollection | null = null;

  if (db[collectionName]) {
    collection = db[collectionName];
  } else {
    collection = await db.collection<PokemonModel, OrmMethods, StaticMethods>({
      name: collectionName,
      schema: PokemonSchema
    });
  }

  return collection;
}
