import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary,
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  date: {
    fontSize: '16px',
    fontWeight: 'bold',
    flex: '0 0 auto',
    marginBottom: theme.spacing(1),
  },
  weatherWrapper: {
    textAlign: 'center',
    marginBottom: theme.spacing(1),
  },
  weatherConditionIconWrapper: {
    flex: '0 0 auto',
  },
  weatherConditionDescription: {
    fontWeight: 'bold',
  },
  temperatureWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  temperatureSection: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  temperatureseparator: {
    flex: '0 0 auto',
    margin: '0 5px',
  },
  temperatureValue: {
    flex: '0 0 auto',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  temperatureUnit: {
    flex: '0 0 auto',
    fontSize: '10px',
  },
}));

export default useStyles;
