/**
 * 110. Balanced Binary Tree
 * https://leetcode.com/problems/balanced-binary-tree/description/
 * 
 * Given a binary tree, determine if it is height-balanced.
 * 
 * see problem online
    Input: root = [3,9,20,null,null,15,7]
    Output: true
 */

function TreeNode(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
}
const empty = null;
const isBalanced = (root)=>{
    //from the root are the left and right subtrees are balanced?
    // if tree is empty, then it is balanced, 
    let balance = true;

    const getHeight = (root, height)=>{
        if(root === null){
            console.log([true, 0])
        }
        //add 1 to the left and right heights so it will move down the tree; 
        const leftNodeHeight = getHeight(root.left, height + 1 );
        const rightNodeHeight = getHeight(root.right, height + 1);
        //get absolute values 
            if (Math.abs(rightNodeHeight - leftNodeHeight)> 1){
                balanced = false;
            }
            return(Math.max(leftNodeHeight, rightNodeHeight));
        }
        //call helper function and set height to 0
        getHeight(root, 0);
        return balance
}
isBalanced(TreeNode);