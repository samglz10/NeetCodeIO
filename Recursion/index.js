//Recursion is a function that can call itself

function printNumbers(index, arr){
    console.log(arr[index])
    //write a base case - or our stop condition
    if(index === arr.length){
        return
    }
    printNumbers(index + 1, arr);
}

const numbers = [1,2,3,4]
printNumbers(0, [1,2,3,4]);


function power(number, exponent){
    if(exponent ===1){
        return number
    } else {
        return number * power(number, exponent -1);
    }
}

power(2, 5)

const doll = [0,1,2,3,4,5,6,7,8]
function processNestingDoll(doll, arr){
    //1) base case 
    if(doll === arr){
        return console.log(doll, arr)
    } else {
    //2)if it fails, recursive call
       console.log('working..')
       return  processNestingDoll(arr +1)
    }
    
}

//processNestingDoll(5, doll.length)

//4. Write a JavaScript program to compute the sum of an array of integers.  
const sumArray = [1,2,3,4,5,6];
//output = 21
const sumOfArrayIntegers =(arr)=> {
    if(arr.length === 1){
        return arr[0];
    } else {
        return arr.pop() + sumOfArrayIntegers()
    }
}

sumOfArrayIntegers(sumArray);

