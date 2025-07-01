// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
    {
        files: ['**/*.ts'],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.strictTypeChecked,
            ...tseslint.configs.stylisticTypeChecked,
            ...angular.configs.tsAll,
        ],
        processor: angular.processInlineTemplates,
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: __dirname,
            },
        },
        rules: {
            '@typescript-eslint/no-confusing-void-expression': 'off', // Don't create unncessary closure and we prefer code tersity anyway
            '@angular-eslint/no-developer-preview': 'off',
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
        },
    },
    {
        files: ['**/*.html'],
        extends: [...angular.configs.templateAll],
        rules: {
            '@angular-eslint/template/no-autofocus': 'off',
            '@angular-eslint/template/no-call-expression': 'off',
            '@angular-eslint/template/i18n': 'off',
        },
    },
);
