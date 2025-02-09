function expect(val) {
    const outerVal = val;
    return {
        toBe: (val) => {
            if (outerVal === val)
                return true;
            else
                throw new Error("Not Equal");
        },
        notToBe: (val) => {
            if (outerVal !== val)
                return true;
            else
                throw new Error("Equal");
        }
    };
}
;
expect(5).toBe(5); // true
// expect(5).notToBe(5); // throws "Equal"
//# sourceMappingURL=index.js.map