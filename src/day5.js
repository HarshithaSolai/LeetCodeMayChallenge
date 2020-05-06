/* 

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.

*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var obj = {},
    result = -1;

  /*obj = {
  'l' : {count : 1, index : 0},
  'e' : {count : 3, index : 1},
  't' : {count : 1, index : 2},
  }
  */
  for (let c = 0; c < s.length; c++) {
    if (!obj[s[c]]) obj[s[c]] = {
      count: 1,
      index: c
    }
    else obj[s[c]].count = obj[s[c]].count + 1;
  }

  var arr = Object.keys(obj);

  for (let c = 0; c < arr.length; c++) {
    if (obj[arr[c]].count === 1) {
      result = obj[arr[c]].index;
      break;
    }
  }

  return result;
};