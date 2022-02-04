module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['import'],
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-alert': 'warn',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react**',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '*.scss',
            patternOptions: { matchBase: true },
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: true,
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};