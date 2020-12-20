export const requiredValidator = {
  required: 'Campo obligatorio. ',
};

export const maxLengthValidator = (value = 10) => ({
  maxLength: {
    value,
    message: `Maximo ${value} caracteres`,
  },
});

export const minLengthValidator = (value = 10) => ({
  minLength: {
    value,
    message: `Debe contener almenos ${value} caracteres`,
  },
});

export const textValidator = (maxValue = 50) => ({
  ...requiredValidator,
  ...maxLengthValidator(maxValue),
});

export const numberValidator = {
  ...requiredValidator,
  ...minLengthValidator(3),
  ...maxLengthValidator(12),
  pattern: {
    value: /^[0-9]+$/,
    message: 'Solo dígitos numericos. ',
  },
};

export const emailValidator = {
  ...textValidator(100),
  pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email Inválido.',
  },
};
