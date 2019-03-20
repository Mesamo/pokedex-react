import React, { FC, CSSProperties, memo, ComponentProps } from 'react';
import Grid from '@material-ui/core/Grid';

import PokemonCard from './PokemonCard';
import { PokemonDoc } from '../hooks/fetchPokemon';

interface PokemonFormProps {
  /**
   * 数据
   *
   * @type {PokemonDoc[]}
   * @memberof PokemonFormProps
   */
  data: PokemonDoc[];

  /**
   * 样式
   *
   * @type {CSSProperties}
   * @memberof PokemonFormProps
   */
  style: CSSProperties;

  /**
   * 打开详情
   *
   * @memberof PokemonCardProps
   */
  handleOpen: (types: string[]) => void;
}

const PokemonListRow: FC<PokemonFormProps> = props => {
  const { data, style, handleOpen } = props;

  const pokemonsCard = data.map(pokemon => (
    <PokemonCard
      key={pokemon.id}
      index={pokemon.index}
      name={pokemon.name}
      types={pokemon.types}
      handleOpen={handleOpen}
    />
  ));

  return (
    <Grid container direction="row" justify="center" style={style}>
      {pokemonsCard}
    </Grid>
  );
};

type PropsAreEqual = (
  prevProps: Readonly<ComponentProps<FC<PokemonFormProps>>>,
  nextProps: Readonly<ComponentProps<FC<PokemonFormProps>>>
) => boolean;

const shouldUpdate: PropsAreEqual = (prevProps, nextProps) => {
  const prev = prevProps.data.map(d => d.id).join('');
  const next = nextProps.data.map(d => d.id).join('');
  return prev === next;
};

export default memo(PokemonListRow, shouldUpdate);
