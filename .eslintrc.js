module.exports = {
  plugins: ["prettier"],
  extends: ["next/core-web-vitals", "plugin:prettier/recommended", "prettier"],
  rules: {
    "prettier/prettier": "error",
  },
};
