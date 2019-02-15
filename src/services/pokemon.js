import { ajax } from 'rxjs/ajax';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export function getPokemons(size) {
  const url = baseUrl + `?limit=${size}&offset=0`;
  return ajax.getJSON(url);
}

export function getPokemonById(id) {
  const url = baseUrl + `/${id}`;
  return ajax.getJSON(url);
}

export function getPokemonByName(name) {
  const url = baseUrl + `/${name}`;
  return ajax.getJSON(url);
}
