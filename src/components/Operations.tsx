import React, { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const styles = createStyles({
  footer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10
  }
});

interface OperationsProps extends WithStyles<typeof styles> {
  onNext: () => void;
  onPrev: () => void;
}

const Operations: FC<OperationsProps> = props => {
  const { classes, onNext, onPrev } = props;

  return (
    <div className={classes.footer}>
      <Button onClick={onPrev} variant="outlined" size="small" color="primary">
        Prev
      </Button>
      <Button onClick={onNext} variant="outlined" size="small" color="primary">
        Next
      </Button>
    </div>
  );
};

export default withStyles(styles)(Operations);
