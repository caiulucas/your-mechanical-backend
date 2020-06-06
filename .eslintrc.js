module.exports = {
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json',
  },

  rules: {
    "class-methods-use-this": "off",
  }
};