import js from "@eslint/js";
import globals from "globals";

export default [
    js.configs.recommended,
    {
        files: ["src/**/*.js", "src/**/*.jsx"],
        rules: {
            "no-unused-vars": "warn",
            quotes: ["error", "double"],
            "jsx-quotes": ["error", "prefer-double"],
            "semi": ["error", "never"],
            "indent": ["error", 4]
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            globals: {
                ...globals.browser,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
];
