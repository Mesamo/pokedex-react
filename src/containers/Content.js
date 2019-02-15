import React, { memo, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Loading from '../components/Loading';
const PokemonList = lazy(() => import('./PokemonList'));

const styles = {
  content: {
    marginTop: '64px'
  }
};

const Content = props => {
  const { classes } = props;
  return (
    <div className={classes.content}>
      <Suspense fallback={<Loading />}>
        <PokemonList />
      </Suspense>
    </div>
  );
};

Content.protoTypes = {
  classes: PropTypes.object.isRequired
};

export default memo(withStyles(styles)(Content));
