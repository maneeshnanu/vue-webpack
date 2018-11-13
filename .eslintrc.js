module.exports = {
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      'plugin:vue/recommended',
      'standard'
    ],
    plugins: [
      'vue'
    ],
    env: {
      browser: true,
      node: true,
      mocha: true
    },
    globals: {
      expect: true
    },
    rules: {
      'generator-star-spacing': 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
  }