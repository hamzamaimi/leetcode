function map(arr, fn) {
    let finalArray = arr;
    finalArray.forEach((e) => fn(e, finalArray.indexOf(e)));
    return finalArray;
}
;
function plusone(n) {
    return n + 1;
}
console.log(map([1, 2, 3], plusone));
//# sourceMappingURL=index.js.map