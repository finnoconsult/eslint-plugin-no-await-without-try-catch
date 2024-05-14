# Avoid Using `await` without Try-Catch Blocks (no-await-without-trycatch)

Asynchronous function calls might encounter errors. When using ES8 async-await syntax, it's important to handle potential failures by wrapping `await` calls within a try-catch block.

## Rule Explanation

This rule prohibits the use of `await` expressions outside of try-catch blocks.

Examples of **incorrect** code under this rule:

```javascript
/*eslint no-await-without-trycatch: "error"*/
async function f() {
    await g();
}
```

Examples of **correct** code under this rule:

```javascript
/*eslint no-await-without-trycatch: "error"*/
async function f() {
    try {
        await g();
    } catch (error) {
        // Handle the error
    }
}
```
