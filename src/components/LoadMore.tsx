import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = createStyles({
  test: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

interface LoadMoreProps extends WithStyles<typeof styles> {
  hasMore: boolean;
  onClick: () => void;
}

const LoadMore: FC<LoadMoreProps> = props => {
  const { classes, hasMore, onClick} = props;

  const loadMore = (
    <Button onClick={onClick} variant="outlined" size="small" color="primary">
      Load More
    </Button>
  );

  const disable = (
    <div>Completed</div>
  )

  return (
    <div className={classes.test}>
      {hasMore ? loadMore : disable}
    </div>
  )
}

export default withStyles(styles)(LoadMore);
