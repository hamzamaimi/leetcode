function expect(val) {
    var outerVal = val;
    return {
        toBe: function (val) {
            if (outerVal === val)
                return true;
            else
                throw new Error("Not Equal");
        },
        notToBe: function (val) {
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
