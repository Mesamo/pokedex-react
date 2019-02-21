import React, { memo, FC } from 'react';
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
  }
});

interface PokemonDetailProps extends RouteComponentProps, WithStyles<typeof styles> {

  /**
   * Callback function when detail closed
   *
   * @memberof PokemonDetailProps
   */
  handleClose?: () => void;

  /**
   * Pokemon id number
   *
   * @type {number}
   * @memberof PokemonFormProps
   */
  id?: number;

  /**
   * Pokemon types
   *
   * @type {string[]}
   * @memberof PokemonFormProps
   */
  types?: string[];
}

const PokemonDetail: FC<PokemonDetailProps> = props => {
  const { handleClose, classes, types } = props;
  const color = getSpriteBackground([]);

  return (
    <Zoom in={true} timeout={10}>
      <div className={classes.modal} style={{ background: color }}>
        <div>qweqwe</div>
        <IconButton className={classes.back} onClick={handleClose} color="inherit" aria-label="Back">
          <BackspaceIcon />
        </IconButton>
      </div>
    </Zoom>
  );
};

PokemonDetail.defaultProps = {
  handleClose: () => {}
};

const b = memo(withRouter(withStyles(styles)(PokemonDetail)));

export default memo(withRouter(withStyles(styles)(PokemonDetail)));
