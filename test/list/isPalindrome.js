/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str1 = '';
    let str2 = '';

    while (head !== null) {
      str1 += head.val;
      str2 = head.val + str2;
      head = head.next;
    }

    return str1 === str2;
    
};

