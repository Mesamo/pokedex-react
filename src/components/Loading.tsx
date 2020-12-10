import { FC } from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = createStyles({
  loading: {
    margin: '0 16px'
  },
  loadingTips: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

interface LoadingProps extends WithStyles<typeof styles> {
  percent: string;
}

const Loading: FC<LoadingProps> = (props) => {
  const { classes, percent } = props;
  const [current, total] = percent.split('/');
  const value = (Number(current) / Number(total)) * 100;
  return (
    <div className={classes.loading}>
      <div className={classes.loadingTips}>
        <Typography>Initialize IndexDB</Typography>
        <Typography>{percent}</Typography>
      </div>
      <LinearProgress variant="determinate" value={value} />
    </div>
  )
}

export default withStyles(styles)(Loading);
