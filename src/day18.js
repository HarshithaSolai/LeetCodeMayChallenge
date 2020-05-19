/* Question no:18 Permutation in a string (May 18th 2020)
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").

Input:s1= "ab" s2 = "eidboaoo"
Output: False
*/


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  var count = 0;

  for (let i = 0; i < s2.length - s1.length + 1; ++i) {
    var temp = '';
    for (let j = i; j < s1.length + i; ++j) {
      temp = temp + s2[j];
    }

    var str1 = temp.split('').sort().join(''),
      str2 = s1.split('').sort().join('');

    if (str1 == str2) {
      return true;
    }
  }

  return false;
};