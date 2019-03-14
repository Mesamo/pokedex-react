import { ajax } from 'rxjs/ajax';

import { PokemonModel } from '../models/PokemonModel';

export function getPokemons() {
  const url = './data/pokemons.json`';
  return ajax.getJSON<PokemonModel[]>(url);
}
