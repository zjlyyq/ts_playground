import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  // 全局忽略
  {
    ignores: ['dist/', 'node_modules/', '*.js', '*.mjs'],
  },

  // ESLint 推荐规则
  eslint.configs.recommended,

  // TypeScript 推荐规则
  ...tseslint.configs.recommended,

  // Prettier 集成（必须放在最后，覆盖冲突规则）
  eslintPluginPrettier,

  // 自定义规则
  {
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-inferrable-types': 'warn',
      'no-console': 'warn',
    },
  }
);
