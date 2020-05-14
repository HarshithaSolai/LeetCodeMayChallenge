/* Question 13: Remove K Digits (May13 2020)

Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

Note:
The length of num is less than 10002 and will be ≥ k.
The given num does not contain any leading zero.

Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.


Input: num = "10200", k = 1
Output: "200"
Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.

Input: num = "10", k = 2
Output: "0"
Explanation: Remove all the digits from the number and it is left with nothing which is 0.
*/


/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (k === 0) return num;
  if (k >= num.length) return "0";

  var numsArray = num.split(""),
    n = numsArray.length,
    result = [];

  for (var i = 0; i < n; i++) {
    while (k > 0 && result.length > 0 && result[result.length - 1] > numsArray[i]) {
      result.pop();
      k--;
    }
    result.push(numsArray[i]);
  }
  result = k > 0 ? result.slice(0, -k) : result;
  return result.join('').replace(/^0+/, '') || '0';
};