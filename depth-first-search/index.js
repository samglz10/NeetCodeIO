let myTree = new BST()
myTree.insert(47)
myTree.insert(27)
myTree.insert(76)
myTree.insert(18)
myTree.insert(27)
myTree.insert(52)
myTree.insert(82)

console.table(myTree);

function DFSPreOrder(){
    let results =[];
    function traverse(currentNode){
        results.push(currentNode.value)
        if(currentNode.left){
            traverse(currentNode.left)
        }
        if(currentNode.right){
            traverse(currentNode.right)
        }
        traverse(this.root)
        return resultss
    }
}




myTree.DFSPreOrder()