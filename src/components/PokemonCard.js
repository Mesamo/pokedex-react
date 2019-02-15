import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { getSpriteBackground } from '../utils/getSpriteBackground';
import { getPokemonFormById } from '../services/pokemon-form';

const styles = {
  card: {
    width: '160px',
    margin: '10px'
  },
  sprite: {
    height: '140px'
  },
  name: {
    textTransform: 'capitalize'
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
  const { classes, id, name } = props;
  const color = getSpriteBackground([]);

  useEffect(() => {
    const subscription = getPokemonFormById(id).subscribe(data => {
      console.log(data);
    })
    return () => {
      subscription.unsubscribe();
    }
  }, [id]);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.sprite} style={{ background: color }}>
          <div className={classes.img}></div>
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default memo(withStyles(styles)(PokemonCard));
