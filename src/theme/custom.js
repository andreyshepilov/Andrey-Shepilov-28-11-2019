import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#4dabf5',
      main: '#2196f3',
      dark: '#1769aa',
    },
    secondary: {
      light: '#33eb91',
      main: '#00e676',
      dark: '#00a152',
    },
    error: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
    additional: {
      purple: '#d500f9',
    },
  },
});

export default customTheme;
