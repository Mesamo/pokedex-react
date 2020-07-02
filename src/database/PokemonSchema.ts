import { RxJsonSchema } from 'rxdb';

export const PokemonSchema: RxJsonSchema = {
  title: 'Pokemon Schema',
  description: 'Describes a simple hero',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true
    },
    index: {
      type: 'number'
    },
    name: {
      type: 'string'
    },
    types: {
      type: 'array',
      maxItems: 2,
      uniqueItems: true,
      items: {
        type: 'string'
      }
    }
  },
  attachments: {
    encrypted: false
  }
}
