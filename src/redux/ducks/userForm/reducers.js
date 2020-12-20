import * as types from './types';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_FORM_SAVE:
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
