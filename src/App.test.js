//  libraries
import MomentUtils from '@date-io/moment';

//  testing
import { render } from '@testing-library/react';

//  wrappers
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import store from './redux/store';

//  components
import App from './App';

describe('Setup General App', () => {
  it('Renders without crashing', () => {
    render(
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <App />
        </MuiPickersUtilsProvider>
      </Provider>,
    );
  });
});
