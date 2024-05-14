'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../../lib/rules/no-await-without-try-catch-in-callback');

const eslintTester = new RuleTester();

eslintTester.run('no-await-without-try-catch-in-callback', rule, {
  valid: [
    {
      // Await inside callback in try-catch block
      code: `
        function f() {
          return async () => {
            try {
              await g();
            } catch (e) {
              console.log(e);
            }
          }
        }
      `,
      parserOptions: { ecmaVersion: 8, sourceType: 'module' },
    },
  ],
  invalid: [
    {
      // Await inside callback not in try-catch block
      code: `
        function f() {
          return async () => {
            await g();
          }
        }
      `,
      parserOptions: { ecmaVersion: 8, sourceType: 'module' },
      errors: [
        {
          message: 'Await expressions inside callback should be executed in a try-catch block.',
        },
      ],
    },
  ],
});
