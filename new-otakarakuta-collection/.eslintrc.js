// .eslintrc.js
module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'react-app',
      'eslint:recommended',
      'plugin:react/recommended',
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
    ],
    rules: {
      'import/first': 'off',
      'no-undef': 'off', // 未定義の変数の警告を無効化
      'react/react-in-jsx-scope': 'off',
      'react/no-deprecated': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
  