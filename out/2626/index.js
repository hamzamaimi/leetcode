"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(accum, curr) { return accum + curr; }
function sum2(accum, curr) { return accum + curr * curr; }
function sum3(accum, curr) { return 0; }
function reduce(nums, fn, init) {
    let accum = init;
    for (let i = 0; i < nums.length; i++) {
        accum = fn(accum, nums[i]);
    }
    return accum;
}
;
console.log('result->', reduce([1, 2, 3, 4], sum, 0));
console.log('result2->', reduce([1, 2, 3, 4], sum2, 100));
console.log('result3->', reduce([], sum3, 25));
//# sourceMappingURL=index.js.map