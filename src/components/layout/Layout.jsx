//  libraries
import PropTypes from 'prop-types';
import moment from 'moment';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';

//  hooks
import { useSelector } from 'react-redux';

//  styles
import useStyles from './styles';

export default function Layout({ children }) {
  const classes = useStyles();
  const {
    name = '...', lastName = '', idCard = '...', birthday = '...', email = '...', githubUser = '...',
  } = useSelector((state) => state.userForm);
  const trigger = useScrollTrigger({ target: undefined });

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar elevation={trigger ? 4 : 0} className={classes.bgHeader}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h4" color="primary" className={classes.homeTitle}>S4N</Typography>
            <div className={classes.userDataContainer}>
              <Typography className={classes.dataItem}>
                Nombre: <i>{`${name} ${lastName}`}</i>
              </Typography>
              <Typography className={classes.dataItem}>
                Cedula: <i>{idCard}</i>
              </Typography>
              <Typography className={classes.dataItem}>
                Fecha de nacimiento: <i>{moment(new Date(birthday)).format('MM-DD-YYYY')}</i>
              </Typography>
              <Typography className={classes.dataItem}>
                Email: <i>{email}</i>
              </Typography>
              <Typography className={classes.dataItem}>
                Github: <i>{githubUser}</i>
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
      <Container>
        <Box my={6}>
          {children}
        </Box>
      </Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
