import * as types from './types';

export const userFormSave = (data) => ({
  type: types.USER_FORM_SAVE,
  data,
});

export const userFormDelete = () => ({
  type: types.USER_FORM_DELETE,
});
