import React, { FC, useMemo } from 'react';
import { RxDatabase } from 'rxdb';

import Context, { ContextType } from './context';

interface ProviderProps {
  db: RxDatabase;
  idAttribute: string;
}

const Provider: FC<ProviderProps> = (props) => {
  const { db, idAttribute, children } = props;
  const context = useMemo<ContextType>(
    () => ({ db, idAttribute }),
    [db, idAttribute]
  );
  return <Context.Provider value={context}>{children}</Context.Provider>
}

export default Provider;
