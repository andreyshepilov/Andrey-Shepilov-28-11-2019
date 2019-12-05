import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  favoriteLocationsList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    listStyle: 'none',
    padding: 0,
    margin: theme.spacing(0, -1),
    flexWrap: 'wrap',

    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  favoriteLocationsListItem: {
    flex: '1 0 auto',
    margin: theme.spacing(0, 1, 2),
    minWidth: '15%',

    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 1, 1),
    },
  },
}));

export default useStyles;
