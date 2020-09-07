const { twoSum } = require('./twoSum2')

describe('problem-167 #twoSum2', () => {
  test('should return indices of the two numbers such that they add up to a specific target', () => {
    expect(twoSum([1, 2, 3, 6, 8, 11], 10)).toEqual([2, 5])
    expect(twoSum([1, 2, 4, 8], 3)).toEqual([1, 2])
  })

  test('should return [-1, -1]', () => {
    expect(twoSum([8, 2, 1, 4], 0)).toEqual([-1, -1])
    expect(twoSum([], 0)).toEqual([-1, -1])
  })
})
