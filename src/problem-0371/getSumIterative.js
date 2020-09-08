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
  while (b !== 0) {
    const sum = a ^ b
    const carry = (a & b) << 1

    a = sum
    b = carry
  }

  return a
}
// @lc code=end

// Time: O(m) Space: O(1)
exports.getSumIterative = getSum
