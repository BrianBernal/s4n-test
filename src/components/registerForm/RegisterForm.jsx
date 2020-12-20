//  libraries
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FormHelperText from '@material-ui/core/FormHelperText';
import { DatePicker } from '@material-ui/pickers';
import moment from 'moment';

//  hooks
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

//  redux
import { userFormSave } from 'redux/ducks/userForm/actions';

//  tools
import {
  textValidator, emailValidator, numberValidator, requiredValidator,
} from 'tools/formValidators';

//  styles
import useStyles from './styles';

export default function RegisterForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    register, handleSubmit, errors, control,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(userFormSave(data));
  };

  return (
    <Paper className={classes.paper}>
      <form noValidate autoComplete="off" className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" component="h1" gutterBottom>Registar Candidato</Typography>
        <TextField
          color="secondary"
          label="Nombres"
          variant="outlined"
          name="name"
          inputRef={register(textValidator())}
          error={!!errors.name}
        />
        <FormHelperText className={classes.textError} error={!!errors.name}>
          {errors?.name?.message}
        </FormHelperText>
        <TextField
          color="secondary"
          label="Apellidos"
          variant="outlined"
          name="lastName"
          inputRef={register(textValidator())}
          error={!!errors.lastName}
        />
        <FormHelperText className={classes.textError} error={!!errors.lastName}>
          {errors?.lastName?.message}
        </FormHelperText>
        <TextField
          color="secondary"
          label="Cédula"
          variant="outlined"
          name="idCard"
          inputRef={register(numberValidator)}
          error={!!errors.idCard}
        />
        <FormHelperText className={classes.textError} error={!!errors.idCard}>
          {errors?.idCard?.message}
        </FormHelperText>
        <Controller
          render={(props) => (
            <DatePicker
              label="Fecha de Nacimiento"
              inputVariant="outlined"
              format="DD/MM/YYYY"
              maxDate={moment().add(-15, 'years')}
              color="secondary"
              value={props.value}
              onChange={props.onChange}
              inputRef={props.ref}
            />
          )}
          name="birthday"
          control={control}
          error={!!errors.birthday}
          defaultValue={null}
          rules={requiredValidator}
          noRef
        />
        <FormHelperText className={classes.textError} error={!!errors.birthday}>
          {errors?.birthday?.message}
        </FormHelperText>
        <TextField
          color="secondary"
          label="Email"
          variant="outlined"
          name="email"
          inputRef={register(emailValidator)}
          error={!!errors.email}
        />
        <FormHelperText className={classes.textError} error={!!errors.email}>
          {errors?.email?.message}
        </FormHelperText>
        <TextField
          color="secondary"
          label="Usuario Github"
          variant="outlined"
          name="githubUser"
          inputRef={register(textValidator())}
          error={!!errors.githubUser}
        />
        <FormHelperText className={classes.textError} error={!!errors.githubUser}>
          {errors?.githubUser?.message}
        </FormHelperText>
        <Button
          className={classes.button}
          variant="outlined"
          size="large"
          color="primary"
          type="submit"
        >
          Registrar
        </Button>
      </form>
    </Paper>
  );
}
