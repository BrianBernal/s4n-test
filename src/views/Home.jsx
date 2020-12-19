//  components
import RegisterForm from 'components/registerForm/RegisterForm';
import ReposTable from 'components/reposTable/ReposTable';

//  styles
import useStyles from './styles';

export default function Home() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <RegisterForm />
      <ReposTable />
    </main>
  );
}
