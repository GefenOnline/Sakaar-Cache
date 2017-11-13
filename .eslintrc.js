module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    env: {
        node: true,
        es6: true,
    },
    rules: {
        'jsx-a11y/href-no-hash': ['off'],
        indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
        quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
        'no-underscore-dangle': ['off'],
        'max-len': ['error', { code: 128 }],
        'class-methods-use-this': ['off'],
        'generator-star-spacing': ['error', 'both'],

        'import/named': 'error',
        'import/default': 'error',
        'import/namespace': 'warn',
    },
    extends: 'airbnb'
};
