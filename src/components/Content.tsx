import React, { memo, FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';

const styles = createStyles({
  content: {
    marginTop: 64
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

export default memo(withStyles(styles)(Content));
