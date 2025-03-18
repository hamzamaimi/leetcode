type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {
  let executed = false;
  return function (...args) {
    if(executed) return undefined;
    
    executed = true;
    return fn(...args)
  };
}


  let fn = (a,b,c) => (a + b + c)
  let onceFn = once(fn)
 
  console.log(JSON.stringify(onceFn(1,2,3))); // 6
  console.log(onceFn(2,3,6)); // returns undefined without calling fn
