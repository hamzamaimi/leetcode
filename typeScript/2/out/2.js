//   Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
function reverseArrayToNumber(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return parseInt(reversedArray.toString());
}
function addTwoNumbers(l1, l2) {
    l1 = reverseArray(l1);
    l2 = reverseArray(l2);
    let l1Number = l1.map(val => val.toString()).join('');
    let l2Number = l2.map(val => val.toString()).join('');
    l1Number = parseInt(l1Number);
    l2Number = parseInt(l2Number);
    const result = l1Number + l2Number;
    let arrayResult = result.toString().split('').map(Number);
    return new ListNode(reverseArrayToNumber(arrayResult));
}
;
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
//# sourceMappingURL=2.js.map