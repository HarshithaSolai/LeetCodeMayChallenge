/* Question no :15 Maximum Circular Sum Array (May15th 2020)

Given a circular array C of integers represented by A, find the maximum possible sum of a non-empty subarray of C.

Here, a circular array means the end of the array connects to the beginning of the array.  (Formally, C[i] = A[i] when 0 <= i < A.length, and C[i+A.length] = C[i] when i >= 0.)

Also, a subarray may only include each element of the fixed buffer A at most once.  (Formally, for a subarray C[i], C[i+1], ..., C[j], there does not exist i <= k1, k2 <= j with k1 % A.length = k2 % A.length.)

Input: [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3

Input: [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10

Input: [3,-2,2,-3]
Output: 3
Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3

Input: [-2,-3,-1]
Output: -1
Explanation: Subarray [-1] has maximum sum -1
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function (A) {
  var total = 0,
    maxSum = -30000,
    curMax = 0,
    minSum = 30000,
    curMin = 0;

  for (var a of A) {
    curMax = Math.max(curMax + a, a);
    maxSum = Math.max(maxSum, curMax);
    curMin = Math.min(curMin + a, a);
    minSum = Math.min(minSum, curMin);
    total += a;
  }

  return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
};