/* Question 4 : Number Complement (May 4 2020)

Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

Example 1:
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

Example 2:
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.

Note: 
1. The given integer is guaranteed to fit within the range of a 32-bit signed integer.
2. You could assume no leading zero bit in the integer’s binary representation.
3. This question is the same as 1009: https://leetcode.com/problems/complement-of-base-10-integer/
*/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  var r=0, comp = 0, count = 0;
  
  while(num > 0) {
    r= num %2;
    num = parseInt(num/2);
    let power = Math.pow(2,count);
    comp = (r) ? comp + (power*0) : comp + (power*1);
    count++;
  }

  return comp;
};