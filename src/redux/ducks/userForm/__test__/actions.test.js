import data from 'tools/testingTools/mockUser';
import * as actions from '../actions';
import * as types from '../types';

describe('userForm actions', () => {
  it('Should create an action to add new github user', () => {
    const expectedAction = {
      type: types.USER_FORM_SAVE,
      data,
    };
    expect(actions.userFormSave(expectedAction));
  });

  it('Should create an action to delete', () => {
    const expectedAction = {
      type: types.USER_FORM_DELETE,
    };
    expect(actions.userFormDelete(expectedAction));
  });
});
