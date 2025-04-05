module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],

  rules: {
    eqeqeq: "off",
    "no-unused-vars": "error",
    "no-unused-expressions": "error",
    "no-console": "warn",
    "no-undef": "off",
    "react/prop-types":"off",
    "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
