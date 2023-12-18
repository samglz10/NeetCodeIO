// https://leetcode.com/problems/binary-tree-level-order-traversal/ -https://www.youtube.com/watch?v=6ZnyEApgFYg

// Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:
Input: root = [1]
Output: [[1]]

Example 3:
Input: root = []
Output: [];
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
*/ 

//Breadth First Search - go through all elements in the same level
const root = [3,9,20,null,null,15,7];

//Output: [[3],[9,20],[15,7]]

let levelOrder = function(node) {
    const results= [];
 
 const nodeTraversal = (node, index)=>{
         if(node === null){
             return null;
         }
         if(!results[index]){
             results.push([]);
         }
         results[index].push(node.val);
         nodeTraversal(node.left, index + 1);
         nodeTraversal(node.right, index + 1);
     }
     nodeTraversal(node,0);
     
    return results
 };

levelOrder(root);
