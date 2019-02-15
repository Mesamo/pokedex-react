import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { usePokemonCard } from '../hooks/use-pokemon-card';
import { getSpriteBackground } from '../utils/getSpriteBackground';

const styles = {
  card: {
    width: '160px',
    margin: '10px'
  },
  sprite: {
    height: '140px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    textTransform: 'capitalize'
  }
};

const PokemonCard = props => {
  const { classes, id } = props;
  const [name, form, types] = usePokemonCard(id);
  const color = getSpriteBackground(types);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.sprite} style={{ background: color }}>
          <img alt="sprite_form" src={form} />
        </div>
        <CardContent>
          <Typography align="center" className={classes.name}>{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

PokemonCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default memo(withStyles(styles)(PokemonCard));
