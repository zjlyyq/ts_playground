import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

import rootCfg from '../../eslint.config.mjs'
export default tseslint.config(
  // 全局忽略
  {
    ignores: ['dist/', 'node_modules/', '*.js', '*.mjs'],
  },

  ...rootCfg,
);
