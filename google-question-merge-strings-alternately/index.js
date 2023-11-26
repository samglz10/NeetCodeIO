/**
Merge Strings Alternately - https://leetcode.com/problems/merge-strings-alternately/
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

My steps:

1.loop through the strings;
2. grab indeces of both strings;
2. push 
 */

const word1 = "abcd";
const word2 = "pq";
const output= "apbqcd";

/* From Strings to Array and then from Array to Strings
const mergeTheWordsAlternately = (word1, word2) =>{
    let maxLength = Math.max(word1.length, word2.length);
    console.log(maxLength)
    let result =[];
    for(let i = 0 ; i < maxLength; i++){
        if(word1[i] !== undefined){
            result.push(word1[i]);
        } if (word2[i] !== undefined){
            result.push(word2[i]);
        }
    }
    return result.join("");
}

mergeTheWordsAlternately(word1, word2)
*/ 

//Strings only
const mergeTheWordsAlternately = (word1, word2) =>{
    let maxLength = Math.max(word1.length, word2.length);
    let result ="";
    for(let i = 0 ; i < maxLength; i++){
        if(word1[i] !== undefined){
            result+= word1[i];
        } if (word2[i] !== undefined){
            result+=word2[i];
        }
    }
    console.log(result);
    return result;
}

mergeTheWordsAlternately(word1, word2)
