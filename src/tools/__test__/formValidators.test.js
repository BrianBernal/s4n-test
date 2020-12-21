import {
  requiredValidator,
  maxLengthValidator,
  minLengthValidator,
  textValidator,
  numberValidator,
} from '../formValidators';

describe('formValidators used by react-hook-form', () => {
  it('should return required validator object', () => {
    expect(typeof requiredValidator.required).toEqual('string');
  });

  it('should return max length validator', () => {
    expect(Object.keys(maxLengthValidator().maxLength).length).toBe(2);
    expect(maxLengthValidator().maxLength.value).toEqual(10);
    expect(typeof maxLengthValidator().maxLength.message).toEqual('string');
    expect(maxLengthValidator().maxLength.message.length).toBeGreaterThan(2);
    expect(maxLengthValidator(15).maxLength.value).toEqual(15);
  });

  it('should return min length validator', () => {
    expect(Object.keys(minLengthValidator().minLength).length).toBe(2);
    expect(minLengthValidator().minLength.value).toEqual(10);
    expect(typeof minLengthValidator().minLength.message).toEqual('string');
    expect(minLengthValidator().minLength.message.length).toBeGreaterThan(2);
    expect(minLengthValidator(15).minLength.value).toEqual(15);
  });

  it('should return text validator', () => {
    expect(Object.keys(textValidator()).includes('required')).toBeTruthy();
    expect(Object.keys(textValidator()).includes('maxLength')).toBeTruthy();
  });

  it('should return text validator', () => {
    const keys = Object.keys(numberValidator);
    expect(keys.includes('required')).toBeTruthy();
    expect(keys.includes('maxLength')).toBeTruthy();
    expect(keys.includes('minLength')).toBeTruthy();
    expect(typeof numberValidator.pattern.value).toEqual('object');
    expect(typeof numberValidator.pattern.message).toEqual('string');
  });
});
