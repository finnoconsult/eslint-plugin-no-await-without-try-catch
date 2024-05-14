'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../../lib/rules/no-await-without-try-catch')

const eslintTester = new RuleTester();

eslintTester.run('no-await-without-trycatch', rule, {
  valid: [
    {
      // Await in try-catch block
      code: `
        async function f() {
            try {
                await g()
            } catch (e) {
                console.error(e)
            }
        }`,
      parserOptions: { ecmaVersion: 8, sourceType: 'module' },
    },
  ],
  invalid: [
    {
      // Await not in try-catch block
      code: `
        async function f() {
            const x = await g()
            return x
        }`,
      parserOptions: { ecmaVersion: 8, sourceType: 'module' },
      errors: [
        {
          message: 'Await expressions should be executed in a try-catch block.',
        },
      ],
    },
  ],
});
