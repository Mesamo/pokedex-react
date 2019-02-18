import React, { memo, Suspense, lazy, FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';

import Loading from '../components/Loading';
const PokemonList = lazy(() => import('./PokemonList'));

const styles = createStyles({
  content: {
    marginTop: '64px'
  }
});

interface ContentProps extends WithStyles<typeof styles> {}

const Content: FC<ContentProps> = ({ classes }) => {
  return (
    <div className={classes.content}>
      <Suspense fallback={<Loading />}>
        <PokemonList />
      </Suspense>
    </div>
  );
};

export default memo(withStyles(styles)(Content));
