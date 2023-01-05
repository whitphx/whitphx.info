module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
  // Ref: https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/#graphql-eslint
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      processor: '@graphql-eslint/graphql',
      parser: "@typescript-eslint/parser",
      plugins: ["react", "@typescript-eslint"],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
      ],
      env: {
        browser: true,
        es2021: true,
      },
    },
    {
      files: ['*.graphql'],
      parser: '@graphql-eslint/eslint-plugin',
      plugins: ['@graphql-eslint'],
      rules: {
        '@graphql-eslint/no-anonymous-operations': 'error',
        '@graphql-eslint/naming-convention': [
          'error',
          {
            OperationDefinition: {
              style: 'PascalCase',
              forbiddenPrefixes: ['Query', 'Mutation', 'Subscription', 'Get'],
              forbiddenSuffixes: ['Query', 'Mutation', 'Subscription'],
            },
          },
        ],
      },
    },
  ],
}
