'use strict';

const rule = {
  defaultOptions: [],
  meta: {
    type: 'suggestion',
    schema: [],
    messages: {
      failure: 'Await expressions should be executed in a try-catch block.',
    },
  },
  create(context) {
    return {
      AwaitExpression(throwNode) {
        if (
          context.sourceCode
            .getAncestors?.(throwNode)
            .every((node) => node.type !== 'TryStatement')
        ) {
          context.report({
            node: throwNode,
            messageId: `failure`,
          });
        }
      },
    };
  },
};

module.exports = rule;
