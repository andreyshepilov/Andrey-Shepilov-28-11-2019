import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flex: '0 0 auto',
  },
  toolbar: {
    padding: theme.spacing(3),

    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  toolbarContentWrapper: {
    width: '100%',
  },
  topRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',

    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  bottomRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    maxHeight: 0,
    transition: 'max-height 0.3s, margin 0.3s',
    marginTop: 0,
  },
  bottomRowActive: {
    maxHeight: '40px',
    marginTop: theme.spacing(2),
  },
  logoMain: {
    marginRight: theme.spacing(2),
    fontSize: '25px',
    flex: '0 0 auto',

    [theme.breakpoints.down('xs')]: {
      flex: '1 0 auto',
    },
  },
  controlsWrapper: {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',

    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-between',
    },
  },
  navWrapper: {
    marginRight: theme.spacing(2),
    flex: '0 0 auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

export default useStyles;
