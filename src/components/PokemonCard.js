import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

import PokemonForm from './PokemonForm';
import PokemonName from './PokemonName';
import { getPokemon } from '../hooks/getPokemon';

const styles = {
  card: {
    width: '160px',
    margin: '10px'
  }
};

const PokemonCard = props => {
  const { classes, id } = props;
  console.log('renderer' + id);
  const { name, types } = getPokemon(id);

  const handleClick = () => {
    console.log('click');
  };

  return (
    <Grow in={true}>
      <Card className={classes.card}>
        <CardActionArea onClick={handleClick}>
          <PokemonForm id={id} types={types} />
          <CardContent>
            <PokemonName name={name}/>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grow>
  );
};

PokemonCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired
};

export default memo(withStyles(styles)(PokemonCard));
