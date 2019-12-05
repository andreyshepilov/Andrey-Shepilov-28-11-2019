import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  autocompleteUnitWrapper: {
    marginBottom: 0,
    transition: 'margin 0.3s',
  },
  autocompleteUnitWrapperWithError: {
    marginBottom: theme.spacing(2),
  },
  autocompleteErrorMessage: {
    color: theme.palette.error.main,
  },
}));

export default useStyles;
