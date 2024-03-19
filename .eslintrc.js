module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'react-native/no-inline-styles': 0,
  },
  globals: {
    jest: true,
  },
  env: {
    browser: true,
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      env: {
        browser: true,
      },
      rules: {'react-native/no-inline-styles': 0},
    },
  ],
  ignorePatterns: ['build/**/*', 'dist/**/*', '*.d.ts'],
};
