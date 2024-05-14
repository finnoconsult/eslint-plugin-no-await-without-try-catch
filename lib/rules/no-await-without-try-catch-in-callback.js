'use strict';

const rule = {
  defaultOptions: [],
  meta: {
    type: 'suggestion',
    schema: [],
    messages: {
      failure: 'Await expressions inside callback should be executed in a try-catch block.',
    },
  },
  create(context) {
    return {
      AwaitExpression(throwNode) {
        const ancestors = context.getAncestors();
        
        const isInCallback = ancestors.some(node => {
          return (
            node.type === 'ArrowFunctionExpression' ||
            node.type === 'FunctionExpression'
          );
        });

        if (isInCallback) {
          const parentFunctionNode = ancestors.find(node => {
            return (
              node.type === 'ArrowFunctionExpression' ||
              node.type === 'FunctionExpression'
            );
          });

          // Check if parent function is an async function and has a try-catch block
          if (
            parentFunctionNode.async &&
            parentFunctionNode.body.body.some(
              statement => statement.type === 'TryStatement'
            )
          ) {
            return; // No error if async function with try-catch block
          }

          context.report({
            node: throwNode,
            messageId: 'failure',
          });
        }
      },
    };
  },
};

module.exports = rule;
