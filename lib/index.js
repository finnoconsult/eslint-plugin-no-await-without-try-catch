/**
 * @author Puteáni-Holl Ákos
 */

"use strict";

const noAwaitWithoutTryCatch = require("./rules/no-await-without-try-catch");
const noAwaitWithoutTryCatchInCallback = require("./rules/no-await-without-try-catch-in-callback");

module.exports.rules = {
    'no-await-without-try-catch': noAwaitWithoutTryCatch,
    'no-await-without-try-catch-in-callback': noAwaitWithoutTryCatchInCallback,
};