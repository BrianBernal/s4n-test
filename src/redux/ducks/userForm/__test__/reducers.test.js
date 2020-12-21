import reducer, { initialState } from '../reducers';
import * as types from '../types';

describe('userForm reducers', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should return user data state', () => {
    const data = {
      name: 'Brian',
      lastName: 'Bernal Hernandez',
      idCard: '100200300',
      birthday: '27-nov-1993',
      email: 'brianbernal27@gmail.com',
      gitHubUser: 'BrianBernal',
    };
    expect(reducer({}, {
      type: types.USER_FORM_SAVE,
      data,
    })).toEqual(data);
  });

  it('Should return empty state', () => {
    expect(reducer({}, {
      type: types.USER_FORM_DELETE,
    })).toEqual({});
  });
});
