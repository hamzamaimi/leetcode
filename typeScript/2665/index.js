var start = performance.now();
function createCounter(init) {
    var currentValue = init;
    return {
        increment: function () {
            return ++currentValue;
        },
        decrement: function () {
            return --currentValue;
        },
        reset: function () {
            currentValue = init;
            return currentValue;
        }
    };
}
;
var counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
var counter2 = createCounter(0);
counter2.increment();
counter2.increment();
counter2.decrement();
counter2.reset();
counter2.reset();
var end = performance.now();
console.log("Execution time: ".concat(end - start, " milliseconds"));
