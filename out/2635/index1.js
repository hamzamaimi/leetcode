function map(arr, fn) {
    let finalArray = arr;
    finalArray.forEach((e, i) => { finalArray[i] = fn(e, i); });
    return finalArray;
}
;
function plusone(n) {
    return n + 1;
}
function plusI(n, i) { return n + i; }
console.log(map([1, 2, 3], plusone));
//# sourceMappingURL=index1.js.map