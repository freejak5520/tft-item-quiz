module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["prettier", "import", "@typescript-eslint"],
  extends: [
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "prettier",
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
  },
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
};
