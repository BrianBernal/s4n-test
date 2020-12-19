//  libraries
import { ThemeProvider } from '@material-ui/core/styles';

// styles
import theme from 'styles/theme';
import { CssBaseline } from '@material-ui/core';

//  components
import Layout from 'components/layout/Layout';
import Home from 'views/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  );
}
