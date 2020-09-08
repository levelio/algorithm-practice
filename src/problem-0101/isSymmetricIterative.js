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
