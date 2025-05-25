// module imports
const prettierPlugin = require('eslint-plugin-prettier');
const prettierRecommended = require('eslint-plugin-prettier').configs.recommended;
const globals = require('globals');

module.exports = [
  { ignores: ['node_modules', 'dist', 'build', '*.log', 'coverage'] },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: globals.node, // globals.nodeBuiltin
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierRecommended.rules,
      'no-console': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^(_|req|res|next)$' }],
    },
  },
];
