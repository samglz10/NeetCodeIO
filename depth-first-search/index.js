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

type TNode = {
    value: number;
    left: TNode | null;
    right: TNode | null;
}

function dfs(node: TNode) {
    if(node.value){
        console.log(node.value);
    } 
    if(node.left !== null){
        dfs(node.left);
    }
    if(node.right !== null){
        dfs(node.right);
    }
}

const tree: TNode = {
    value: 1,
    left: {
        value: 2,
        left: {
        value: 4,
        left: null,
        right: null
        },
        right: {
        value: 5,
        left: null,
        right: null
        }
    },
    right: {
        value: 3,
        left: {
        value: 6,
        left: null,
        right: null
        },
        right: {
        value: 7,
        left: null,
        right: null
        }
    }
}