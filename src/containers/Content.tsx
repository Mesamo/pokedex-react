import { FC } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  content: {
    height: '100%',
    paddingTop: 64,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column'
  }
});

interface ContentProps {}

const Content: FC<ContentProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      {children}
    </div>
  );
};

export default Content;
