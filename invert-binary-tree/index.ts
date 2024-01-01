/** https://leetcode.com/problems/invert-binary-tree/
 Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:

Input: root = [2,1,3]
Output: [2,3,1]

 */

const root = [4,2,7,1,3,6,9];
//output = [4,7,2,9,6,3,1]


const invertBinaryTree =(root)=>{
    //return null if the root is null
    if (root === null ){
        return null
    } 
    //swap left and right nodes using a temporary variable
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    //recursively call the function again for the left and right node
    invertBinaryTree(root.left);
    invertBinaryTree(root.right);
    return root
}
invertBinaryTree(root);


type TNode = {
    value: number;
    left: TNode | null;
    right: TNode | null;
}

declare const node: TNode;
//binary trees hodl primarily a value and nodes. In a binary tree it can have a left and a right node.
node.left.value;
node.right.value;
