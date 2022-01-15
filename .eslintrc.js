module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-props-no-spreading': 0,
  },
};
