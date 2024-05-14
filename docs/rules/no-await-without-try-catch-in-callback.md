# Avoid Using `await` Inside Callbacks without Try-Catch Blocks (no-await-inside-callback)

Asynchronous operations within callback functions might result in errors. When using ES8 async-await syntax within callback functions, it's crucial to handle potential failures by wrapping `await` expressions inside a try-catch block.

## Rule Explanation

This rule ensures that `await` expressions inside callback functions are executed within a try-catch block to handle potential errors.

Examples of **incorrect** code under this rule:

```javascript
/*eslint no-await-inside-callback: "error"*/
someCallbackFunction(() => {
    await someAsyncOperation();
});
```

Examples of **correct** code under this rule:

```javascript
/*eslint no-await-inside-callback: "error"*/
someCallbackFunction(async () => {
    try {
        await someAsyncOperation();
    } catch (error) {
        // Handle the error
    }
});
```
