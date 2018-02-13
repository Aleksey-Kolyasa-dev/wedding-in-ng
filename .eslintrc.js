module.exports = {
    extends: 'google',
    rules: {
        'max-len': [2, { code: 120, tabWidth: 4, ignoreUrls: true }],
        'arrow-parens': [2, 'always'],
        'prefer-const': 'error',
        'no-invalid-this': 'off',
        'object-curly-spacing': [2, 'always'],
	    'no-tabs': 'off',
	    'new-cap': 'off',
        'space-before-function-paren': 'off',
    },
    parserOptions: {
        ecmaVersion: 2017,
    },
};
