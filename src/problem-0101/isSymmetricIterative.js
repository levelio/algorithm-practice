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

const isSymmetricIterative = function (root) {
  if (!root) return true
  const stack = []
  stack.push(root.left)
  stack.push(root.right)

  while (stack.length) {
    const s = stack.pop()
    const t = stack.pop()
    if (s === null && t === null) continue
    else if (s === null || t === null) return false
    else if (s.val !== t.val) return false

    stack.push(s.left)
    stack.push(t.right)
    stack.push(s.right)
    stack.push(t.left)
  }

  return true
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = isSymmetricIterative
// @lc code=end

exports.isSymmetricIterative = isSymmetricIterative
