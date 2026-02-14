import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ['node_modules/**', '.next/**', 'jest.config.js'],
  },
  ...compat.config({
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
    ],
    rules: {},
    overrides: [
      {
        files: ['**/*.spec.{ts,tsx}'],
        env: {
          jest: true,
        },
      },
    ],
  }),
]
