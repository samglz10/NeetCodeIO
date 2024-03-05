/* 
https://leetcode.com/problems/valid-parentheses/
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */

const input = "{[]}"
const isValid = function(s) {
    for(let i = 0; i < s.length; i++){
        const stack = [];
        let sumOfTwoCharacters = s[i] + s[i+1];
       if(sumOfTwoCharacters === '()' || sumOfTwoCharacters === '[]' || sumOfTwoCharacters === '{}'){
           stack.push(sumOfTwoCharacters);
       }
        if(stack.length === 0){
            return false
        }

        return true
        }
        
}

//isValid(input);



const newTry =(t)=>{
    const stack = [];
    for(let i = 0; i < t.length; i++){
        if(t[i] ==='(' || t[i] ==='{' || t[i] ==='['){
            stack.push(t[i]);
            console.log(stack[i] + t[i +1])
            if(stack[i] + t[i + 1]==='()' || stack[i] + t[i +1] ==='{}' || stack[i] + t[i +1] ==='[]' ){
               stack.push(t[i+1])
            } else {
                stack.pop();
            }
        }
        //console.log(stack[i])
    }
    console.log(stack)
    
}

newTry(input);

