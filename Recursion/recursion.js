// A function without recursion

function countDown(n){
    for(let i = n; i > 0; i--){
        console.log(i);
    }
    console.log('Non Recursive, Hooray!')
}
//countDown(3);

// A Recursive function
function countDownRecursive(n){
//is 3 <= 0
    if (n <=0){
        //if true, then we print our final consologe
        console.log('Recursion is cool, Hooray')
        return
    }
    //it will log the value of n
    console.log(n)
    //will subtract the amount by -1
    countDownRecursive(n-1);
}
//function will be called until the conditional statement is true
//countDownRecursive(5)

// Another Recursive Example
//Non-Recursive
function sumRange(n){
    let total = 0;
    for(let i = n; i > 0; i--){
        total += i
    }
    console.log(total);
    return total
}

//sumRange(3);

//Recursive
function sumRangeRecursive(n, total = 0){
    if (n <= 0){
        return total;
    }
    console.log(total);
    return  sumRangeRecursive(n-1, total + n);
}

//sumRangeRecursive(6);

/**
 * 1. Write a JavaScript program to calculate the factorial of a number.  
In mathematics, the factorial of a non-negative integer n, 
denoted by n!, is the product of all positive integers less than or equal to n. 
For example, 5! = 5 x 4 x 3 x 2 x 1 = 120
 * 
 */

const n = 50213;
function factorialRecursion(n){
    if (n === 0){
        return 1
    }
    const results = n * factorialRecursion(n-1);
    console.log(results)

}

//factorialRecursion(6)

 //7. Write a JavaScript program to check whether a number is even or not. 

 function evenOrOdd(n){
   if (n % 2 === 0){
    return console.log('even')
 } else {
    return console.log('odd')
 }
}
//evenOrOdd(n);
/*
  Question 1: Sum all numbers
  Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
  
  Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
 */

  function sumOfRange(n=6){
    if(n === 0){
        return 1
    }
    return n + sumOfRange(n-1);
  }
  sumOfRange();

