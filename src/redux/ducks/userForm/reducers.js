import * as types from './types';

// tomar de la cookie o dejar empty object {}
const existCookie = document.cookie
  .split('; ')
  .find((row) => row.startsWith('userForm'));
const initialState = existCookie ? JSON.parse(existCookie.split('=')[1]) : {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_FORM_SAVE:
      //  guardar la cookie
      document.cookie = `userForm=${JSON.stringify(action.data)}; max-age=${60 * 60 * 24 * 30}`;
      return {
        ...state,
        ...action.data,
      };

    case types.USER_FORM_DELETE:
      return { ...initialState };

    default:
      return state;
  }
};
