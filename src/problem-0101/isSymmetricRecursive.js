/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 *
 * https://leetcode-cn.com/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (49.38%)
 * Likes:    694
 * Dislikes: 0
 * Total Accepted:    116.5K
 * Total Submissions: 230.1K
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给定一个二叉树，检查它是否是镜像对称的。
 *
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 *
 *
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 *
 *
 * 说明:
 *
 * 如果你可以运用递归和迭代两种方法解决这个问题，会很加分。
 *
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
