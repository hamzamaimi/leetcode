"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function once(fn) {
    let executed = false;
    return function (...args) {
        if (executed)
            return undefined;
        const res = [{ "calls": 1, "value": fn(...args) }];
        executed = true;
        return res;
    };
}
let fn = (a, b, c) => (a + b + c);
let onceFn = once(fn);
console.log(JSON.stringify(onceFn(1, 2, 3))); // 6
console.log(onceFn(2, 3, 6)); // returns undefined without calling fn
//# sourceMappingURL=index.js.map