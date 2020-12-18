//  libraries
import { ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// styles
import theme from 'styles/theme';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((th) => ({
  background: th.palette.secondary,
  '& code': {
    fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, monospace',
  },
  app: {
    textAlign: 'center',
  },
  appHeader: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  },
  appLink: {
    color: '#61dafb',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.app}>
        <header className={classes.appHeader}>
          <Typography variant="h1" color="primary" className={classes.background}>Material UI and airbnb eslint</Typography>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={classes.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
