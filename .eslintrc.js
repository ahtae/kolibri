var path = require('path');

module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.spec.js'],
      env: {
        es6: true,
        browser: true,
        node: true,
        jest: true,
      },
      parserOptions: {
        ecmaVersion: 8,
      },
    },
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 7,
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
    },
  },
  globals: {
    __version: true,
    __coreAPISpec: true,
    __filename: true,
    __publicPath: true,
    __copyrightYear: true,
  },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:vue/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  plugins: ['import', 'vue', 'kolibri'],
  settings: {
    'import/resolver': {
      [path.resolve(
        path.join(path.dirname(__filename), './frontend_build/src/alias_import_resolver.js')
      )]: {
        extensions: ['.js', '.vue'],
      },
    },
  },
  rules: {
    'comma-style': 2,
    'max-len': [
      'error',
      100,
      {
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    'vue/attribute-hyphenation': [2, 'never'],
    'vue/name-property-casing': [2, 'PascalCase'],
    'vue/require-default-prop': 0,
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-closing-bracket-spacing': ['error'],
    // Waiting on https://github.com/vuejs/eslint-plugin-vue/pull/397
    // 'vue/component-name-in-template-casing': 3

    'import/first': 1,
    'import/no-duplicates': 1,
    'import/newline-after-import': 1,
    'import/order': 1,

    // Custom vue rules
    'kolibri/vue-filename-and-component-name-match': 2,
    'kolibri/vue-component-registration-casing': 2,
  },
};
