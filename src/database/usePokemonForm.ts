import { useState, useEffect } from 'react';

import { PokemonModel } from '../models/PokemonModel';
import useRxDocument from './useRxDocument';
import { getSpriteFormUrl, FormType } from '../utils/getSpriteFormUrl';

export function usePokemonForm(id: string, type: FormType = FormType.FrontDefault) {
  const [form, setForm] = useState<Blob>();
  const doc = useRxDocument<PokemonModel>('pokemons', id);

  useEffect(() => {
    if (!doc) {
      return;
    }
    const id = doc.id;
    const cacheFormAttachment = doc.getAttachment(id);
    if (cacheFormAttachment) {
      cacheFormAttachment.getData().then((data) => {
        setForm(data);
      });
    } else {
      const index = doc.index;
      const url = getSpriteFormUrl(index);
      fetch(url).then(response => {
        return response.blob()
      }).then(data => {
        return doc.putAttachment({ id, data, type: data.type });
      }).then(attachment => {
        return attachment.getData();
      }).then(data => {
        setForm(data);
      });
    }
  }, [doc])

  return form;

}
