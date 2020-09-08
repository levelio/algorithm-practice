const { searchMatrix } = require('./search2dMatrix2')

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
]

describe('problem-240 #searchMatrix', () => {
  test('should return position', function () {
    expect(searchMatrix(matrix, 4)).toEqual(true)
    expect(searchMatrix(matrix, 100)).toEqual(false)
  })
})
