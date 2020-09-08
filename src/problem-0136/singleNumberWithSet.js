/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 *
 * https://leetcode-cn.com/problems/single-number/description/
 *
 * algorithms
 * Easy (64.61%)
 * Likes:    1136
 * Dislikes: 0
 * Total Accepted:    169.9K
 * Total Submissions: 257K
 * Testcase Example:  '[2,2,1]'
 *
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 *
 * 说明：
 *
 * 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
 *
 * 示例 1:
 *
 * 输入: [2,2,1]
 * 输出: 1
 *
 *
 * 示例 2:
 *
 * 输入: [4,1,2,1,2]
 * 输出: 4
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const set = new Set()
  let sum = 0,
    uniqueSum = 0
  for (let num of nums) {
    if (!set.has(num)) {
      uniqueSum += num
      set.add(num)
    }
    sum = sum + num
  }

  return 2 * uniqueSum - sum
}

// @lc code=end

// Time: O(n) Time: O(n)
exports.singleNumberWithSet = singleNumber
