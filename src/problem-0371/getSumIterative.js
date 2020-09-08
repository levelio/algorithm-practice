/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 *
 * https://leetcode-cn.com/problems/sum-of-two-integers/description/
 *
 * algorithms
 * Easy (53.23%)
 * Likes:    220
 * Dislikes: 0
 * Total Accepted:    25.4K
 * Total Submissions: 46.9K
 * Testcase Example:  '1\n2'
 *
 * 不使用运算符 + 和 - ​​​​​​​，计算两整数 ​​​​​​​a 、b ​​​​​​​之和。
 *
 * 示例 1:
 *
 * 输入: a = 1, b = 2
 * 输出: 3
 *
 *
 * 示例 2:
 *
 * 输入: a = -2, b = 3
 * 输出: 1
 *
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
