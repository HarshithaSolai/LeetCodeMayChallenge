/* Question 14: Implement Trie( Prefix Tree) (May 14 2020)

Implement a trie with insert, search, and startsWith methods.

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true

*/

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.dict = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let currword = this.dict;
  word.split('').forEach((char) => {
    if (!currword[char]) currword[char] = {};
    currword = currword[char];
  })
  currword.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.searchNode(word);
  return node != null ? node.isEnd == true : false;
};

/** javaScript
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.searchNode(prefix);
  return node != null;
};

Trie.prototype.searchNode = function (word) {
  let currword = this.dict;
  for (let char of word.split('')) {
    if (currword[char]) {
      currword = currword[char]
    } else {
      return null;
    }
  }
  return currword;
}

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */