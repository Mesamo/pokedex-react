import { ajax } from 'rxjs/ajax';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon-form';

export function getPokemonForms(size) {
  const url = baseUrl + `?limit=${size}&offset=0`;
  return ajax.getJSON(url);
}

export function getPokemonFormById(id) {
  const url = baseUrl + `/${id}`;
  return ajax.getJSON(url);
}

export function getPokemonFormByName(name) {
  const url = baseUrl + `/${name}`;
  return ajax.getJSON(url);
}
