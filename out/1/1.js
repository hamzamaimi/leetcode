"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let currentSelection = nums[i];
        for (let i2 = i + 1; i2 < nums.length; i2++) {
            if (currentSelection + nums[i2] == target) {
                return [i, i2];
            }
        }
    }
    return [];
}
;
console.log(twoSum([3, 2, 4], 6));
//# sourceMappingURL=1.js.map