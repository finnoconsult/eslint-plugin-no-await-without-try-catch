## Getting started

```bash
npm install --save-dev eslint-plugin-safeasync
```

And configure your `.eslintrc` file accordingly. For example:

```bash
{
    "plugins": [
        "safeasync",
    ],
    "rules": {
        "safeasync/no-await-without-trycatch": "warn",
        "safeasync/no-await-without-trycatch-in-callback": "warn",
    }
}
```
