import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const baseUrl = 'https://pokeapi.co/api/v2/pokemon-form';

export function getPokemonForms(size: number): Observable<any> {
  const url = baseUrl + `?limit=${size}&offset=0`;
  return ajax.getJSON(url);
}

export function getPokemonFormById(id: number): Observable<any> {
  const url = baseUrl + `/${id}`;
  return ajax.getJSON(url);
}

export function getPokemonFormByName(name: string): Observable<any> {
  const url = baseUrl + `/${name}`;
  return ajax.getJSON(url);
}
