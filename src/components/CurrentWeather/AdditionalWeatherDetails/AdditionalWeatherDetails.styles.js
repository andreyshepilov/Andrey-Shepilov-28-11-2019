import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  sectionPaper: {
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2),

    '&:last-of-type': {
      marginBottom: theme.spacing(1),
    },
  },
  sectionHeader: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.dark,
    fontSize: '16px',
  },
  sectionMainWrapper: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;
