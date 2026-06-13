const fs = require('fs');
const path = require('path');

// Dynamically load your custom dual-linter rules
const customRulesPath = path.resolve(__dirname, '.mon-vs/dual-linter-rules.json');
let customRules = {};

if (fs.existsSync(customRulesPath)) {
  const rawRules = fs.readFileSync(customRulesPath, 'utf8');
  customRules = JSON.parse(rawRules);
}

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2022: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    ...customRules // Injecting your custom ruleset here
  },
  ignorePatterns: ['node_modules/', 'dist/', '.github/', 'docker/'],
};
