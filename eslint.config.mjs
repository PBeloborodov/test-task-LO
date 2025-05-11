import js from '@eslint/js';
import parser from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';
import pluginReactNative from 'eslint-plugin-react-native';
import pluginImport from 'eslint-plugin-import';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReactHooks from 'eslint-plugin-react-hooks'; 

export default [
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'android',
      'ios',
      '*.config.js',
      '*.config.cjs',
      '*.cjs',
      '.prettierrc.js',
      'babel.config.js',
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        browser: true,
        es2021: true,
      },
    },
    plugins: {
      '@typescript-eslint': pluginTs,
      react: pluginReact,
      'react-native': pluginReactNative,
      import: pluginImport,
      prettier: pluginPrettier,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'prettier/prettier': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react-native/no-inline-styles': 'off',
      'react-native/split-platform-components': 'off',
      'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
      'no-console': 'off',
      'no-empty': 'error',
      'no-unused-vars': 'warn',
      'no-undef': 'off',
      'react-hooks/exhaustive-deps': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
