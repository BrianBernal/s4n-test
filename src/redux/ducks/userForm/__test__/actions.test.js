import * as actions from '../actions';
import * as types from '../types';

describe('userForm actions', () => {
  it('Should create an action to add new github user', () => {
    const data = {
      name: 'Brian',
      lastName: 'Bernal Hernandez',
      idCard: '100200300',
      birthday: '27-nov-1993',
      email: 'brianbernal27@gmail.com',
      gitHubUser: 'BrianBernal',
    };
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
