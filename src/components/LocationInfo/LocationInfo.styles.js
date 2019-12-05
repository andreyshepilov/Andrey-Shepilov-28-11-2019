import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    position: 'relative',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  locationInfoWrapper: {
    flex: '0 0 auto',

    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  favButton: {
    flex: '0 0 auto',
  },
}));

export default useStyles;
