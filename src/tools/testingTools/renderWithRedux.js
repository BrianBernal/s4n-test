/* eslint-disable react/jsx-filename-extension */

//  libraries
import { render } from '@testing-library/react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

//  react-redux
import { Provider } from 'react-redux';
import store from 'redux/store';

export default function RenderWithRedux(component) {
  return {
    ...render(
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          {component}
        </MuiPickersUtilsProvider>
      </Provider>,
    ),
  };
}
