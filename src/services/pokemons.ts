import { PokemonModel } from '../models/PokemonModel';

export function getPokemons(): Promise<PokemonModel[]> {
  const url = './data/pokemons.json';
  return fetch(url).then((response) => {
    return response.json()
  });
}
