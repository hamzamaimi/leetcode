function greaterThan10(n) { return n > 10; }
;
function firstIndex(n, i) { return i === 0; }
;
function plusOne(n) { return n + 1; }
;
function filter(arr, fn) {
    var filterArr = [];
    arr.forEach(function (n, i) {
        if (fn(n, i)) {
            filterArr.push(n);
        }
    });
    return filterArr;
}
;
var result1 = filter([1, 20, 30], greaterThan10);
// const result2 = filter([1,2,3], firstIndex);
// const result3 = filter([-2,-1,0,1,2], plusOne);
