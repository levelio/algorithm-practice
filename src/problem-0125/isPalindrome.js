/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (41.85%)
 * Likes:    174
 * Dislikes: 0
 * Total Accepted:    91.6K
 * Total Submissions: 212.5K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 *
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 *
 * 示例 1:
 *
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: "race a car"
 * 输出: false
 *
 *
 */

// @lc code=start
const isAlphanumeric = (str) => /^[a-zA-Z0-9]$/.test(str)
const isEqualIgnoreCase = (a, b) => a.toLowerCase() === b.toLowerCase()

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  if (s === null || s === undefined || s.length === 0) return true
  let i = 0,
    j = s.length - 1
  for (; i < j; ++i, --j) {
    while (i < j && !isAlphanumeric(s[i])) ++i
    while (i < j && !isAlphanumeric(s[j])) --j
    if (i < j && !isEqualIgnoreCase(s[i], s[j])) return false
  }

  return true
}
// @lc code=end

// Time: O(n), Space: O(1)
exports.isPalindrome = isPalindrome
