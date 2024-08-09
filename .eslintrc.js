// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["pretier"],
  rules: {
    semi: ["error", "never"],
    "prettier/prettier": "error",
  },
};
