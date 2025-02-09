
//   Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseArray<T>(arr: T[]): T[] {
    const reversedArray: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
} 

function reverseArrayToNumber<T>(arr: T[]): number {
    const reversedArray: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return parseInt(reversedArray.toString())
}

function addTwoNumbers(l1: number[] | null, l2: number[] | null): ListNode | null {
    l1= reverseArray(l1); l2= reverseArray(l2);
    let l1Number : string|number = l1.map(val => val.toString()).join('');
    let l2Number : string|number = l2.map(val => val.toString()).join('');
    
    l1Number = parseInt(l1Number);
    l2Number = parseInt(l2Number);
    const result : Number = l1Number + l2Number;
    let arrayResult : Number[] = result.toString().split('').map(Number);
    return new ListNode(reverseArrayToNumber(arrayResult));

};

console.log(addTwoNumbers([2,4,3], [5,6,4]))