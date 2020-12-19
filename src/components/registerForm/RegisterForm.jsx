//  libraries
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

//  styles
import useStyles from './styles';

export default function RegisterForm() {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <form noValidate autoComplete="off" className={classes.form}>
        <Typography variant="h4" component="h1" gutterBottom>Registar Candidato</Typography>
        <TextField id="name" name="name" label="Nombres" variant="outlined" />
        <TextField id="lastName" name="lastName" label="Apellidos" variant="outlined" />
        <TextField id="idCard" name="idCard" label="Cédula" variant="outlined" />
        <TextField id="birthday" name="birthday" label="Fecha de Nacimiento" variant="outlined" />
        <TextField id="email" name="email" label="Email" variant="outlined" />
        <Button
          className={classes.button}
          variant="outlined"
          size="large"
          color="primary"
        >
          Registrar
        </Button>
      </form>
    </Paper>
  );
}
