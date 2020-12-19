import makeStyles from '@material-ui/core/styles/makeStyles';
// colors
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import blueGrey from '@material-ui/core/colors/blueGrey';

const bgColor = {
  success: green[400],
  error: red[400],
  warning: orange[400],
  information: blueGrey[400],
};

export default makeStyles(() => ({
  snackBar: {
    '& .MuiSnackbarContent-root': {
      backgroundColor: ({ type }) => bgColor[type],
    },
  },
}));
