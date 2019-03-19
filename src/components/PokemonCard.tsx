import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import PokemonForm from './PokemonForm';
import PokemonName from './PokemonName';

const styles = createStyles({
  card: {
    width: 160,
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
   * 宝可梦编号
   *
   * @type {number}
   * @memberof PokemonCardProps
   */
  index: number;

  /**
   * 宝可梦名称
   *
   * @type {string}
   * @memberof PokemonCardProps
   */
  name: string;

  /**
   * 宝可梦属性
   *
   * @type {string[]}
   * @memberof PokemonCardProps
   */
  types: string[]

  /**
   * 打开详情
   *
   * @memberof PokemonCardProps
   */
  handleOpen: (types: string[]) => void;
}

const PokemonCard: FC<PokemonCardProps> = props => {
  const { classes, index, name, types, handleOpen } = props;

  const open = () => {
    handleOpen(types);
  }

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={open}>
        <PokemonForm index={index} types={types} />
        <CardContent className={classes.content}>
          <PokemonName name={name} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(PokemonCard);
