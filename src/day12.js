/* Question 12: Single Element in a Sorted Array (May 12 2020)

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

Input: [1,1,2,3,3,4,4,8,8]
Output: 2

Input: [3,3,7,7,10,11,11]
Output: 10
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let start = 0,
    end = nums.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (mid % 2) mid--;
    if (nums[mid] === nums[mid + 1]) {
      start = mid + 2;
    } else {
      end = mid;
    }
  }
  return nums[start];
};