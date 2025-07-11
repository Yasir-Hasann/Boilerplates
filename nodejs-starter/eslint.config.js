// module imports
const js = require('@eslint/js');
const prettierPlugin = require('eslint-plugin-prettier');
const prettierRecommended = require('eslint-plugin-prettier').configs.recommended;
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules', 'dist', 'build', '*.log', 'coverage', '.husky'] },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        ...globals.node,
        ...globals.commonjs,
      },
    },
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...prettierRecommended.rules,
      'prettier/prettier': 'error',
      'no-console': 'off',
      'no-path-concat': 'error',
      'no-buffer-constructor': 'error',
      'prefer-const': 'error',
      'no-var': 'error',
      'no-unused-vars': ['error', { argsIgnorePattern: '^(_|req|res|next)$' }],
    },
  },
];
