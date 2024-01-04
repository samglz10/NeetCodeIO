/* 
27. Remove Element

https://leetcode.com/problems/remove-element/
https://www.youtube.com/watch?v=Pcd1ii9P9ZI&list=PLot-Xpze53lfQmTEztbgdp8ALEoydvnRQ&index=28

Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

1) Change the array nums such that the first k elements of nums contain the elements which are not equal to val. 
    The remaining elements of nums are not important as well as the size of nums.

2) Return k.

Example 1:

    Input: nums = [3,2,2,3], val = 3
    Output: 2, nums = [2,2,_,_]

    Explanation: Your function should return k = 2, with the first two elements of nums being 2.
    It does not matter what you leave beyond the returned k (hence they are underscores).

Example 2:

    Input: nums = [0,1,2,2,3,0,4,2], val = 2
    Output: 5, nums = [0,1,4,0,3,_,_,_]

    Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
    Note that the five elements can be returned in any order.
    It does not matter what you leave beyond the returned k (hence they are underscores).

*/
const input = [3,2,2,3];
const value = 3;
const outputK = 2;
const outputNums = "[2,2,_,__]"; //as a string to avoid console error

const tryDos =(nums, val)=>{
    let k = 0;
    for(let i =0; i < nums.length; i++){
        if(nums[i] !== val){
            nums[k]= nums[i];
            k+=1;
        }
        
        return k;
    }
}

tryDos(input, value);

/*
//Set answer but does not return duplicates

var removeElement = function(nums, val) {
    numSet = new Set(nums);
    for(let number of nums){
        if(numSet.has(val)){
            numSet.delete(val);
        }
    }


    console.log([...numSet])
    
};

removeElement(input, value);

*/