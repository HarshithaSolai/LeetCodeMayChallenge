/*

In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.


Example : 1 
Input: root = [1,2,3,4], x = 4, y = 3
Output: false

Example : 2 
Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true


Example : 3
Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false

*/



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    var levelMap = {}, parentMap = {};

    inOrder(root, null, 0, levelMap, parentMap);
     
    return (levelMap[x] === levelMap[y] && parentMap[x] !== parentMap[y]) ? true : false;

};

var inOrder = function(root, parent, depth, levelMap, parentMap){
    if(root === undefined) {
        return;
    } 
    
    levelMap[root.val]  = depth;
    parentMap[root.val] = (parent === null) ? null : parent.val;
    if(root.left !== null) inOrder(root.left, root, depth+1, levelMap, parentMap);
    if(root.right !== null) inOrder(root.right, root, depth+1, levelMap, parentMap);
};