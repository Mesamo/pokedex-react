import PouchDB from 'pouchdb';

import { needUpdate, updateVersion } from './version-db';

const db = new PouchDB('pokemons');

export async function fetchData() {
  try {
    const response = await fetch('http://localhost:3000/data/pokemon.json')
    const data = await response.json();

    if (await needUpdate('pokemons', data.version)) {
      await db.bulkDocs(data.docs);
      await updateVersion('pokemons', data.version);
    } else {
      console.log("don't need");
    }

    const docs = await db.allDocs({ include_docs: true });

    return docs.rows.map(row => row.doc);
  } catch(error) {
    console.log(error);
  }
}
