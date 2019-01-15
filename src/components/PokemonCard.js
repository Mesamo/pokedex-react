import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { getSpriteBackground } from '../util/getSpriteBackground';

const styles = {
  card: {
    width: '160px',
    margin: '10px'
  },
  sprite: {
    height: '140px'
  },
  img: {
    height: '120px',
    width: '120px',
    padding: '10px 20px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  }
};

const PokemonCard = props => {
  const { classes, id, name, types } = props;
  const color = getSpriteBackground(types);
  const idNumber = parseInt(id);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.sprite} style={{ background: color }}>
          <div className={classes.img + ` sprite-${idNumber}`}></div>
        </div>
        <CardContent>
          <Typography align="center">{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

PokemonCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default memo(withStyles(styles)(PokemonCard));
