var lastNumber;
function createCounter(n) {
    return function () {
        if (lastNumber == null) {
            lastNumber = n;
            return n;
        }
        else {
            lastNumber += 1;
            return lastNumber;
        }
    };
}
var counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
console.log(counter(), " ", counter(), " ", counter());
