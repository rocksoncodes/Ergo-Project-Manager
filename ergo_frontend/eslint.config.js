import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**', '.angular/**'],
  },
  {
    files: ['**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]);
