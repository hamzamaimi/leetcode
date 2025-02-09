const start = performance.now();
type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let currentValue : number = init;
    return{
        increment : () => {
            return ++currentValue;
        },
        decrement : () => {
            return --currentValue;
        },
        reset : () => {
            currentValue = init;
            return currentValue;
        }
    }
};


const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

const counter2 = createCounter(0);
counter2.increment();
counter2.increment();
counter2.decrement();
counter2.reset();
counter2.reset();


 

const end = performance.now();
console.log(`Execution time: ${end - start} milliseconds`);
