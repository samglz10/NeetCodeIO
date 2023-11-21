/** 1523. Count Odd Numbers in an Interval Range - https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/
 * 
Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
 

Constraints:

0 <= low <= high <= 10^9
 * 
 */
const input = [2,7]
const [low, high] = input;
//console.log(low, high)

const countOdds = function(low, high) {
    const returnedArray = [];
    for (let i = low; i <= high; i++){
        if(i % 2){
            returnedArray.push(i);
        }
    }
    console.log(low, high, returnedArray)
    return returnedArray
};

countOdds(low,high);


//NeetCode accepted function

const countOddsNeet = function(low, high) {
    let counter = 0;
    for (let i = low; i <= high; i++){
        if(i % 2 !==0){
            counter++
        }
    }
    console.log(low, high, counter)
    return counter
};

countOddsNeet(low,high);

