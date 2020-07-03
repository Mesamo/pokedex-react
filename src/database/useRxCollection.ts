import { useState, useEffect } from 'react';
import { RxCollection } from 'rxdb';
import useRxDB from './useRxDB';

function useRxCollection<T>(name: string): RxCollection<T> | undefined {
	const [collection, setCollection] = useState<RxCollection<T>>();
	const db = useRxDB();

	useEffect(() => {
		if (!db) {
			return;
		}
		const found = db[name];
		if (found) {
			setCollection(found);
		}
	}, [db, name]);

	return collection;
}

export default useRxCollection;
