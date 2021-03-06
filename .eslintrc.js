module.exports = {
  ignorePatterns: ['.eslintrc.js', 'dist/**/*'],

  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:flowtype/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks', 'redux-saga', "prefer-arrow",  "flowtype"],
  rules: {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-var": 2,
    "default-param-last": 0,
    "default-case":0,

    'react/react-in-jsx-scope': 'off',
    'import/imports-first': 0,
    'import/newline-after-import': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/no-webpack-loader-syntax': 0,
    'import/prefer-default-export': 0,

    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/label-has-for': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-confusing-arrow': 0,
    'no-param-reassign': ['error', {ignorePropertyModificationsFor: ['draft']}],
    'no-console': 1,
    'no-unused-vars': 2,
    'no-use-before-define': 0,
    'prefer-template': 2,
    'react/destructuring-assignment': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-closing-tag-location': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-first-prop-new-line': [5, 'multiline'],
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/jsx-uses-vars': 2,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'redux-saga/no-yield-in-race': 2,
    'redux-saga/yield-effects': 2,
    'require-yield': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/interactive-supports-focus': 0,
    'radix': 0,

    "react/jsx-props-no-spreading": [2, { // allow props spreading only on translations
      "exceptions": ['FormattedMessage']
    }],


    "react/function-component-definition": [2, {
      "namedComponents": "arrow-function",
      "unnamedComponents": "arrow-function",
    }],


    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        "disallowPrototype": false
      }
    ],
    "prefer-arrow-callback": [
      "error",
      {"allowNamedFunctions": true}
    ],


  },
};
