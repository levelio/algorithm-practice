const { twoSum } = require('./twoSum')

describe('problem-1 #twoSum', () => {
  test('should return indices of the two numbers such that they add up to a specific target', () => {
    expect(twoSum([1, 2, 3, 6, 8, 11], 10)).toEqual([1, 4])
    expect(twoSum([8, 2, 1, 4], 3)).toEqual([1, 2])
  })

  test('should return [-1, -1]', () => {
    expect(twoSum([8, 2, 1, 4], 0)).toEqual([-1, -1])
    expect(twoSum([], 0)).toEqual([-1, -1])
  })
})
