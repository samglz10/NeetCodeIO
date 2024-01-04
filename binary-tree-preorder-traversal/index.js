/* 
144. Binary Tree Preorder Traversal

https://www.youtube.com/watch?v=afTpieEZXck&list=PLQpVsaqBj4RIJdYW6Y-iAswxCZeocfoRW&index=4

Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1: 

 see image attached

Input: root = [1,null,2,3]
Output: [1,2,3]

Example 2:

Input: root = [];
Output: [];
Example 3:

Input: root = [1]
Output: [1]
*/


var preorderTraversal = function(root) {
    // if root is null then return empty array
    if (!root){
        return [];
    }

    const left = preorderTraversal(root.left);
    const right = preorderTraversal(root.right);

    return [root.val, ...left, ...right];
}

preorderTraversal([1,null,2,3]);