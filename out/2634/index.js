"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greaterThan10(n) { return n > 10; }
;
function firstIndex(n, i) { return i === 0; }
;
function plusOne(n) { return n + 1; }
;
function filter(arr, fn) {
    let filterArr = [];
    arr.forEach((n, i) => {
        if (fn(n, i)) {
            filterArr.push(n);
        }
    });
    return filterArr;
}
;
const result1 = filter([1, 20, 30], greaterThan10);
console.log(result1);
const result2 = filter([1, 2, 3], firstIndex);
console.log(result2);
const result3 = filter([-2, -1, 0, 1, 2], plusOne);
console.log(result3);
//# sourceMappingURL=index.js.map