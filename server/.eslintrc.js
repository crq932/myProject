module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    'space-before-blocks': 'error', 
    'space-infix-ops': 'error',
    'keyword-spacing': 'error',
    'no-var': 'error', 
    indent: ['error', 2],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
  }
};
