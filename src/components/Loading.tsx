import { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
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

interface LoadingProps {
  percent: string;
}

const Loading: FC<LoadingProps> = (props) => {
  const { percent } = props;
  const classes = useStyles();
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

export default Loading;
