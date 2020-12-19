import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 10,
    maxWidth: '20rem',
    maxHeight: '38rem',
  },
  button: {
    marginTop: '1rem',
  },
  paper: {
    height: 'max-content',
    padding: '3rem',
  },
}));
