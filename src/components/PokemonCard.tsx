import { FC, memo } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import { PokemonModel } from '../models/PokemonModel';
import PokemonForm from './PokemonForm';
import PokemonName from './PokemonName';

const styles = createStyles({
  card: {
    width: 160,
    height: 184,
    margin: 10
  },
  link: {
    textDecoration: 'none'
  },
  content: {
    padding: 10
  }
});

interface PokemonCardProps extends WithStyles<typeof styles> {
  /**
   * 宝可梦
   *
   * @type {PokemonModel}
   * @memberof PokemonCardProps
   */
  pokemon: PokemonModel;

  /**
   * 打开详情
   *
   * @memberof PokemonCardProps
   */
  handleOpen: (pokemon: PokemonModel) => void;
}

const PokemonCard: FC<PokemonCardProps> = props => {
  const { classes, pokemon, handleOpen } = props;

  const open = () => {
    handleOpen(pokemon);
  }

  const { id, index, types, name } = pokemon;
  console.log(`Renderer Pokemon Card, id: ${id}`);
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={open}>
        <PokemonForm id={id} index={index} types={types} />
        <CardContent className={classes.content}>
          <PokemonName name={name} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default memo(
  withStyles(styles)(PokemonCard),
  (prevProps, nextProps) => prevProps.pokemon.id === nextProps.pokemon.id
);
