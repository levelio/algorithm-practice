const { isPalindrome } = require('./isPalindrome')

describe('problem-125 #isPalindrome', () => {
  test('" race a E-car " is palindrome', () => {
    const input = ' race a E-car '
    expect(isPalindrome(input)).toBe(true)
  })

  test('" race a car " is not palindrome', () => {
    const input = ' race a car '
    expect(isPalindrome(input)).toBe(false)
  })

  test('empty input is palindrome', () => {
    expect(isPalindrome('')).toBe(true)
  })

  test('null and undefined is palindrome', () => {
    expect(isPalindrome(null)).toBe(true)
    expect(isPalindrome(undefined)).toBe(true)
  })
})
