import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export default createMuiTheme({
  palette: {
    typography: {
      fontFamily: [
        'Roboto',
        'sans-serif',
      ],
    },
    primary: {
      main: '#ec1c25',
    },
    secondary: {
      main: '#1f1f1f',
    },
  },
  status: {
    danger: 'orange',
  },
});
