import { createContext } from 'react';
import { RxDatabase } from 'rxdb';

export interface ContextType {
	db: RxDatabase;
	idAttribute: string;
}

const Context = createContext<ContextType>({ db: ({} as any), idAttribute: 'id'});

export default Context;
