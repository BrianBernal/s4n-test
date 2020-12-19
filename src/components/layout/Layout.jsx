//  libraries
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

//  components
import Footer from 'components/layout/footer/Footer';

//  styles
import useStyles from './styles';

export default function Layout({ children }) {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <>
      <AppBar elevation={trigger ? 4 : 0} className={classes.bgHeader}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" color="primary" className={classes.homeTitle}>S4N</Typography>
          <div className={classes.userDataContainer}>
            <Typography className={classes.dataItem}>
              Nombre: <i>Brian Bernal Hernandez</i>
            </Typography>
            <Typography className={classes.dataItem}>
              Cedula: <i>1022388215</i>
            </Typography>
            <Typography className={classes.dataItem}>
              Fecha de nacimiento: <i>27-nov-1993</i>
            </Typography>
            <Typography className={classes.dataItem}>
              Email: <i>brianbernal7@gmail.com</i>
            </Typography>
            <Typography className={classes.dataItem}>
              Github: <i>github.com/BrianBernal</i>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box my={4}>
          {children}
        </Box>
      </Container>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
