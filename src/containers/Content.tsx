import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
  content: {
    height: '100%',
    paddingTop: 64,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  }
});

interface ContentProps extends WithStyles<typeof styles> {}

const Content: FC<ContentProps> = ({ classes, children }) => {
  return (
    <div className={classes.content}>
      {children}
    </div>
  );
};

export default withStyles(styles)(Content);
