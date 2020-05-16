/* Question no : 16 Odd Even Linked List (16th May 2020)

Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.

You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL

Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head) return head;

  var oddList = head,
    evenList = head.next;

  while (oddList.next && oddList.next.next) {
    var curr = oddList.next;
    oddList.next = oddList.next.next;
    oddList = oddList.next;
    curr.next = oddList.next;
  }

  oddList.next = evenList;
  return head;
};