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
    position: 'relative',
    overflow: 'hidden',

    '&:hover $overlayTopPart, &:hover $overlayBottomPart': {
      opacity: 0.3,
    },
  },
  location: {
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
    width: '100%',
    margin: theme.spacing(0, -1),
  },
  temperatureSection: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    margin: theme.spacing(0, 1),
  },
  temperatureValueWrapper: {
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
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

  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  overlayTopPart: {
    backgroundColor: theme.palette.additional.purple,
    opacity: '0',
    transition: 'opacity 0.3s',
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      opacity: ['0.7', '!important'],
      cursor: 'pointer',
    },
  },
  overlayBottomPart: {
    backgroundColor: theme.palette.error.dark,
    opacity: '0',
    transition: 'opacity 0.3s',
    width: '100%',
    height: '50%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      opacity: ['0.7', '!important'],
      cursor: 'pointer',
    },
  },
  overlayLabel: {
    fontWeight: 'bold',
    fontSize: '16px',
    textTransform: 'uppercase',
  },
  overlayIcon: {
    flex: '1 0 auto',
    fontSize: '4.5rem',
    position: 'absolute',
    opacity: 0.5,
  },
}));

export default useStyles;
