type F = (x: number) => number;

function compose(functions: F[]): F {

  return function (x) {
    let accumulator = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      accumulator = functions[i](accumulator)
    }
    return accumulator;
  }
};


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9
