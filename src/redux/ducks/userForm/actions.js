import * as types from './types';

export const userFormSave = (data) => ({
  type: types.USER_FORM_SAVE,
  data,
});

export const userFormUpdate = (data) => ({
  type: types.USER_FORM_DELETE,
  data,
});
