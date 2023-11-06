/*Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

var mySqrt = function(x) {
    let sqrt = 1
    let result = 0
    while(sqrt*sqrt <= x){
        result = sqrt
        sqrt++
    }

    return result
};

*/
let x = 5;
let result = 0;

let squareRoot = x**2;
console.log(`square root is ${squareRoot}`)

const mySqrt = (x)=>{

    
    if (x < 2){
        return console.log(x);
    } if (x**2 > x) {
        return console.log(`${x} is greater than 2 `)
    } if (x**2 < x) {
        return console.log(`2 is less than ${x}`)
        
    } else {
        return console.log('false')
    }
}

mySqrt(x);