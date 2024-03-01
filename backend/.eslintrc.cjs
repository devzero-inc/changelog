module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    "project": "./tsconfig.json"
  },
  rules: {
    'no-unused-vars': 'warn',
  },
};
