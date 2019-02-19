type TypeColor = {
  [typeName: string]: string;
};

const typeColors: TypeColor = {
  normal:   '#A8A878',
  fire:     '#F08030',
  fighting: '#C03028',
  water:    '#6890F0',
  grass:    '#78C850',
  poison:   '#A040A0',
  electric: '#F8D030',
  ground:   '#E0C068',
  rock:     '#B8A038',
  bug:      '#A8B820',
  dragon:   '#7038F8',
  ghost:    '#705898',
  dark:     '#705848',
  fairy:    '#EE99AC',
  steel:    '#B8B8D0',
  psychic:  '#F85888',
  ice:      '#98D8D8',
  flying:   '#A890F0'
};

export const getSpriteBackground = (types: string[]) => {
  if (types && types.length > 1) {
    const color1 = typeColors[types[0]];
    const color2 = typeColors[types[1]];
    return `linear-gradient(90deg, ${color1} 50%, ${color2} 50%)`;
  } else if (types && types.length === 1) {
    return typeColors[types[0]];
  } else {
    return '';
  }
};
