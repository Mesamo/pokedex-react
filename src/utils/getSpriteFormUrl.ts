export enum FormType {
  FrontDefault,
  FrontShiny,
  BackDefault,
  BackShiny
}

const BASE_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

export function getSpriteFormUrl(id: number, type?: FormType): string {
  let url = BASE_URL;
  switch (type) {
    case FormType.FrontDefault:
      url += `${id}.png`;
      break;
    case FormType.FrontShiny:
      url += `shiny/${id}.png`;
      break;
    case FormType.BackDefault:
      url += `back/${id}.png`;
      break;
    case FormType.BackShiny:
      url += `back/shiny/${id}.png`;
      break;
    default:
      url += `${id}.png`;
      break;
  }

  return url;
}
