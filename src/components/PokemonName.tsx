import { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  name: {
    textTransform: 'capitalize'
  }
});

interface PokemonNameProps {

  /**
   * Pokemon name
   *
   * @type {string}
   * @memberof PokemonNameProps
   */
  name: string;
}

const PokemonName: FC<PokemonNameProps> = props => {
  const { name } = props;
  const classes = useStyles();
  return (
    <Typography align="center" className={classes.name}>
      {name}
    </Typography>
  );
};

export default PokemonName;
