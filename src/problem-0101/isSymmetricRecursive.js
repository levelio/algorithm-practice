/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const isSymmetricNode = function (s, t) {
  if (s && t) {
    return s.val === t.val && isSymmetricNode(s.left, t.right) && isSymmetricNode(s.right, t.left)
  } else return s === null && t === null
}

const isSymmetricRecursive = function (root) {
  if (!root) return true
  return isSymmetricNode(root.left, root.right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = isSymmetricRecursive
// @lc code=end

// Time: O(n) Space: O(n)
exports.isSymmetricRecursive = isSymmetricRecursive
