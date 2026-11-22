import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'coverage/**'],
  },
  js.configs.recommended,
  {
    files: ['webpack.config.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ['src/**/__tests__/**/*.js', '**/*.test.js', '**/*.spec.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];