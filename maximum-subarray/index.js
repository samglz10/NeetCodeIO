/* 53. Maximum Subarray
https://leetcode.com/problems/maximum-subarray/
https://www.youtube.com/watch?v=5WZl3MMT0Eg&list=PLot-Xpze53lfQmTEztbgdp8ALEoydvnRQ&index=4

Given an integer array nums, find the subarray with the largest sum, and return its sum.

Example 1:

    Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.

    Example 2:

    Input: nums = [1]
    Output: 1
    Explanation: The subarray [1] has the largest sum 1.
    
    Example 3:

    Input: nums = [5,4,-1,7,8]
    Output: 23
    Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

    */

    const input = [-2,1,-3,4,-1,2,1,-5,4];

    var maxSubArray = function(nums) {
        let max = nums[0];
        console.log(max);
        let sumOf = 0;
        for(let i =0; i< nums.length; i++){
            sumOf+=nums[i];
            if(max < sumOf){
                max = sumOf
            }
            if(sumOf < 0){
                sumOf= 0;

            }
        }
        console.log(max)
    };

    maxSubArray(input);