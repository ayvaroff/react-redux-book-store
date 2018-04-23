const path = require('path');

module.exports = {
    'parser': 'babel-eslint',
    'extends': [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended'
    ],
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'ecmaFeatures': {
            'jsx': true
        },
        'sourceType': 'module'
    },
    'rules': {
        'no-console': 'warn',
        'no-const-assign': 'warn',
        'no-this-before-super': 'warn',
        'no-undef': 'warn',
        'no-unreachable': 'warn',
        'no-unused-vars': 'warn',
        'constructor-super': 'warn',
        'valid-typeof': 'warn',
        'react/jsx-uses-react': 1,
        'react/jsx-no-undef': 2,
        'react/jsx-wrap-multilines': 2,
        'react/no-strings-refs': 0
    },
    'plugins': [
        'import',
        'react',
        'jsx-a11y'
    ],
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': path.join(__dirname, 'webpack.dev.config.js')
            }
        }
    }
};