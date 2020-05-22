/* Question no:22 Sort Characters by Frequency (May 22nd 2020)

Given a string, sort it in decreasing order based on the frequency of characters.

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.


Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

*/

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  var obj = {},
    result = '';

  for (var str of s) {
    obj[str] = obj[str] ? obj[str] + 1 : 1
  }

  Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach(function (v) {
    for (var j = 0; j < obj[v]; j++) {
      result += v;
    }
  });

  return result;
};