"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function compose(functions: F[]): F {
//     return function(x) {
//       let accumulator = x;
//       for(let i = functions.length - 1; i >= 0; i++){
//         accumulator = functions[i](accumulator)
//       }
//       return accumulator;
//     }
// };
function compose(functions) {
    return function (x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    };
}
const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // 9
//# sourceMappingURL=index.js.map