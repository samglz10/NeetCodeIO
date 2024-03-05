/**
 * https://leetcode.com/problems/reverse-linked-list/description/
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * 
 *  Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]

    Input: head = [1,2]
    Output: [2,1]
 */
const head = [1,2,3,4,5]

var reverseList = function(head) {
    let prevNode= null;
    let currentNode = head;
    let nextNode = null;

    while(currentNode !==null){
        //move to the next node
        nextNode = currentNode.next;
        // currentNode.next points now to the previous node, instead of the next Node of the list
        currentNode.next = prevNode;
        //moves the previous Node to the current node
        prevNode = currentNode;
        currentNode = nextNode;
    }

    return prevNode;

};

reverseList(head)
