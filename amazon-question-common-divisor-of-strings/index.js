/*
Greatest Common Divisor of Strings -https://www.youtube.com/watch?v=i5I_wrbUdzM&list=PLQpVsaqBj4RIJdYW6Y-iAswxCZeocfoRW&index=15

For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
 

Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of English uppercase letters.

*/

const str1 = "ABCABC";
const str2 = "ABAB";

const commonDivisor = (str1, str2) =>{
    const smallest = Math.min(str1.length, str2.length);
    //console.log(smallest);
   //check if strings share a common strings
   if(str1 + str2 !== str2 + str1){
        return "";
   } else {
        //loop through 
        for(let length = smallest; length > 0; length--){
           if((str1.length % length ===0) && (str2.length % length === 0)){
             return str1.substring(0, length);
           }
        }
   }
}

commonDivisor(str1, str2);