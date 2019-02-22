import React, { memo, FC } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';
import BackspaceIcon from '@material-ui/icons/ArrowBack';

import { getSpriteBackground } from '../utils/getSpriteBackground';

const styles = createStyles({
  modal: {
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  },
  back: {
    position: 'fixed',
    top: 10,
    left: 10
  },
  link: {
    color: '#FFF'
  }
});

export class DetailLocationState {
  constructor(public id: number, public types: string[]) {}
}

interface PokemonDetailProps
  extends RouteComponentProps<any, any, DetailLocationState>, WithStyles<typeof styles> {}

const PokemonDetail: FC<PokemonDetailProps> = props => {
  const { location, classes } = props;

  if (!location.state) {
    return <Redirect to="/" />;
  }

  const color = getSpriteBackground(location.state.types);

  return (
    <Zoom in={true} timeout={10}>
      <div className={classes.modal} style={{ background: color }}>
        <div>{location.state.id}</div>
        <Link to="/" className={classes.link}>
          <IconButton className={classes.back} color="inherit" aria-label="Back">
            <BackspaceIcon />
          </IconButton>
        </Link>
      </div>
    </Zoom>
  );
};

export default memo(withRouter(withStyles(styles)(PokemonDetail)));
