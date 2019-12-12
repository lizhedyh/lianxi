module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'root': true,
    'extends': [ 'plugin:@myfe/eslint-plugin-myfe/koroRule' ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint',
    ],
    'rules': {
    },
};