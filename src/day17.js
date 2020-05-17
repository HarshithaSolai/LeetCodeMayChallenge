/* Question no: 17 Find all the anagrams in the string (May 17th 2020)
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let result = [];
  if (p.length > s.length) {
    return result;
  }

  let map = new Map();

  for (let c of p) {
    map.set(c, (map.get(c) | 0) + 1);
  }

  let begin = 0,
    end = 0,
    counter = map.size;


  while (end < s.length) {
    let c = s.charAt(end);

    if (map.has(c)) {
      map.set(c, map.get(c) - 1);
      if (map.get(c) === 0) {
        counter--;
      }
    }
    end++;
    while (counter === 0) {
      let d = s.charAt(begin);
      if (map.has(d)) {
        map.set(d, map.get(d) + 1);
        if (map.get(d) > 0) {
          counter++;
        }
      }
      if (end - begin == p.length) {
        result.push(begin);
      }
      begin++;
    }

  }

  return result;

};