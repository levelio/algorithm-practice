/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function (a, b) {
  return b === 0 ? a : getSum(a ^ b, (a & b) << 1)
}
// @lc code=end

// Time: O(m) Space: O(1)
exports.getSumRecursive = getSum
