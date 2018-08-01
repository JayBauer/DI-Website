module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
		es6: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // 'plugin:vue/essential',
    // "plugin:vue/strongly-recommended",
    "plugin:vue/recommended",
    // "plugin:prettier/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
  ],
  // add your custom rules here
  rules: {
    "semi": [1, "never"],
    "wrap-regex": 2,
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    "keyword-spacing": 1,

    "vue/script-indent": [
      "error", "tab",
      {
        "baseIndent": 1,
        "switchCase": 1,
      }
    ],

    // "prettier/prettier": [
    //   "error",
    //   {
    //     "semi": false,
    //     "singleQuote": true,
    //     // "requirePragma": true,
    //     "bracketSpacing": true
    //   },
    // ],
  }
}
