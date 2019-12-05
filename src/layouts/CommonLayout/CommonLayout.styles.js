import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'flex-start',
    minHeight: '100vh',
  },
  mainContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    padding: theme.spacing(3),
    height: '100%',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
}));

export default useStyles;
