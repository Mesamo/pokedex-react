import { RxJsonSchema } from 'rxdb';

export const PokemonSchema: RxJsonSchema = {
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true
    },
    index: {
      type: 'number',
      index: true
    },
    name: {
      type: 'string',
      index: true
    },
    types: {
      type: 'array',
      maxItems: 2,
      uniqueItems: true,
      items: {
        type: 'string'
      }
    }
  }
}
