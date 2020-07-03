import { useState, useContext, useEffect } from 'react';
import { RxDocument } from 'rxdb';

import Context from './context';
import useRxCollection from './useRxCollection';

function useRxDocument<T>(
	collectionName: string,
	id: string
): RxDocument<T> | undefined {
  const [doc, setDoc] = useState<RxDocument<T>>()
	const context = useContext(Context);
  const idAttribute = context.idAttribute;
  const collection = useRxCollection<T>(collectionName);

  useEffect(() => {
    if (collection) {
      collection.findOne().where(idAttribute).eq(id).exec().then(result => {
        if (result) {
          setDoc(result)
        }
      })
    }
  }, [collection, collectionName, id, idAttribute]);

	return doc;
}

export default useRxDocument;
