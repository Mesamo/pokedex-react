import React, { memo, FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import PokemonForm from './PokemonForm';
import PokemonName from './PokemonName';
import { getPokemon } from '../hooks/getPokemon';

const styles = createStyles({
  card: {
    width: 160,
    margin: 10
  }
});

interface PokemonCardProps extends WithStyles<typeof styles> {
  /**
   * Pokemon id number
   *
   * @type {number}
   * @memberof PokemonCardProps
   */
  id: number;
}

const PokemonCard: FC<PokemonCardProps> = props => {
  const { classes, id } = props;
  const { name, types } = getPokemon(id);

  const handleClick = () => {};

  return (
    <Grow in={true}>
      <Card className={classes.card}>
        <CardActionArea onClick={handleClick}>
          <PokemonForm id={id} types={types} />
          <CardContent>
            <PokemonName name={name} />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
};

export default memo(withStyles(styles)(PokemonCard));
