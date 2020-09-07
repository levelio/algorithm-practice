/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
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
