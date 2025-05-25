// module imports
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPluginPkg from 'eslint-plugin-prettier';
import globals from 'globals';

const { configs: prettierConfigs } = prettierPluginPkg;

export default [
  { ignores: ['node_modules', 'dist', 'build', '*.log', 'coverage'] },

  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: globals.node, // globals.nodeBuiltin
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      prettier: prettierPluginPkg,
    },
    rules: {
      ...prettierConfigs.recommended.rules,
      'no-console': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^(_|req|res|next)$' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
];
