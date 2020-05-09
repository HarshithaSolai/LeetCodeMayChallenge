/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Input: 16
Output: true

Input: 14
Output: false
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num <= 0) return false;
  var begin = 1,
    end = num,
    mid;

  while (begin <= end) {
    mid = Math.floor((begin + end) / 2);
    if (mid * mid > num) {
      end = mid - 1;
    } else if (mid * mid === num) {
      return true;
    } else {
      begin = mid + 1;
    }
  }
  return false;
};


/* Submission Details 

68 / 68 test cases passed.
Status: Accepted
Runtime: 40 ms
Memory Usage: 33.9 MB

Beat 99.32% of the javascript submissions
*/