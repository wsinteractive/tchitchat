module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true
  },
  settings: {
    ecmascript: 6,
    jsx: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react", "prettier"],
  extends: ["airbnb", "prettier", "prettier/react"],
  rules: {
    "react/jsx-filename-extension": 0,
    "function-paren-newline": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-absolute-path": 0,
    "no-underscore-dangle": 0,
    "react/no-unescaped-entities": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/prop-types": 0,
    "func-names": 0,
    "no-mixed-operators": 0,
    "no-bitwise": 0,
    "indent": ["error", 2],
  }
};
