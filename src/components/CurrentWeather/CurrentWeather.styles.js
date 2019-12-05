import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    overflow: 'hidden',
  },
  header: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  mainContentWrapper: {
    padding: theme.spacing(2),
    position: 'relative',

    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  headerControls: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      flex: '0  0 100%',
    },
  },
  mainWeatherConditions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: theme.spacing(2),
  },
  temperatureWrapper: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginRight: theme.spacing(1),

    [theme.breakpoints.down('xs')]: {
      flex: '1 0 100%',
      order: 1,
      justifyContent: 'space-between',
    },
  },
  temperatureSection: {
    flex: '0 0 auto',
    marginRight: theme.spacing(2),

    '&:last-of-type': {
      marginRight: 0,
    },
  },
  temperaturePrefix: {
    fontWeight: 'bold',
  },
  temperatureMain: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  temperatureValue: {
    fontWeight: 'bold',
    fontSize: '32px',
    flex: '0 0 auto',
  },
  temperatureUnit: {
    fontSize: '14px',
    flex: '0 0 auto',
  },
  weatherWrapper: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),

    [theme.breakpoints.down('xs')]: {
      flex: '1 0 100%',
      order: 0,
      marginBottom: theme.spacing(2),
    },
  },
  weatherConditionIconWrapper: {
    flex: '0 0 auto',

    '& img': {
      width: '100px',
      height: 'auto',
    },
  },
  weatherConditionDescription: {
    flex: '0 0 auto',
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  bottomSection: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2, 2, 1),
    color: theme.palette.text.secondary,
    position: 'relative',
  },
  forecastList: {
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
  forecastListItem: {
    flex: '1 0 auto',
    margin: theme.spacing(0, 1, 1),
    minWidth: '15%',

    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 1, 1),
    },
  },
}));

export default useStyles;
