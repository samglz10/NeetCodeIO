/**
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 
 * You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
 
 */
var mergeTwoLists = function(list1, list2) {
    let dummyNode = new ListNode(0, null);
    let endNode = dummyNode;

    while(list1 !== null && list2 !== null){
        if(list1.value < list2.value){
            endNode.next = list1;
            list1 = list1.next
        } else{
            endNode.next = list2;
            list2 = list2.next
        }
        endNode = endNode.next
    }
    endNode.next = list1 || list2
    return dummyNode
};

mergeTwoLists()