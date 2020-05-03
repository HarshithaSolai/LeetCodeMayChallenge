/*

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  var note = {},
    value;
  for (let r = 0; r < ransomNote.length; r++) {
    var letter = ransomNote[r];
    note[letter] = note[letter] ? note[letter] + 1 : 1;
  }

  for (let m = 0; m < magazine.length; m++) {
    var letter = magazine[m];
    if (note[letter]) {
      note[letter] = note[letter] - 1;
    }
  }

  return Object.values(note).every((val) => val === 0);

};