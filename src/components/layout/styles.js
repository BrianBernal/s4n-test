import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: {
    padding: '1rem',
  },
  userDataContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  bgHeader: {
    background: theme.palette.secondary.light,
  },
  dataItem: {
    margin: '0 2rem',
    '& i': {
      color: theme.palette.warning.main,
    },
  },
  homeTitle: {
    fontWeight: 500,
  },
}));
