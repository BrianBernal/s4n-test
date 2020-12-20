//  libraries
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

//  styles
import useStyles from './styles';

export default function SnackBar({
  open, setOpen, message, type,
}) {
  const classes = useStyles({ type });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar
      classes={{ root: classes.snackBar }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={(
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      )}
    />
  );
}

SnackBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'information']),
};

SnackBar.defaultProps = {
  message: 'Error de Conexión',
  type: 'error',
};
