//  libraries
import { ThemeProvider } from '@material-ui/core/styles';

//  components
import Layout from 'components/layout/Layout';

// styles
import theme from 'styles/theme';
import { CssBaseline } from '@material-ui/core';
import RegisterForm from 'components/registerForm/RegisterForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <main>
          <RegisterForm />
        </main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
