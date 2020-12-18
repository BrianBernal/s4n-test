module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jest',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 0, // linebreak linux/windows
    'react/jsx-one-expression-per-line': [
      0,
      {
        allow: 'single-child',
      },
    ],
    // exclude test files of jsx file name extension
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.test.js'] }],
    //  just warn unused import/var instead of error
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
  },
};
