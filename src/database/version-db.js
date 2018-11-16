import PouchDB from 'pouchdb';

const db = new PouchDB('versions');

export async function needUpdate(dbname, version) {
  try {
    const dbVersion = await db.get(dbname);
    if (dbVersion && dbVersion.version === version) {
      return false;
    } else {
      return true
    }
  } catch (err) {
    console.log(`${err.docId} version info ${err.reason}`);
    return true
  }
}

export async function updateVersion(dbname, version) {
  try {
    const dbVersion = await db.get(dbname);
    await db.put({
      _id: dbname,
      _rev: dbVersion._rev,
      version
    });
  } catch (err) {
    await db.put({
      _id: dbname,
      version
    });
  }
}
