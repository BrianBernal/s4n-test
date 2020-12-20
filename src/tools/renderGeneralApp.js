/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import store from 'redux/store';

export default function App(component) {
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
