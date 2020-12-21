import * as types from '../types';

describe('Test types', () => {
  it('keys must be equals to values', () => {
    Object.keys(types).forEach((type) => {
      expect(type).toEqual(types[type]);
    });
  });
});
