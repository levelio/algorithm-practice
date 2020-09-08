const { getSumIterative } = require('./getSumIterative')
const { getSumRecursive } = require('./getSumRecursive')

describe('problem-0371 #getSum', () => {
  describe('Recursive version', function () {
    it('should return sum', function () {
      expect(getSumRecursive(1, 2)).toEqual(3)
      expect(getSumRecursive(-1, -2)).toEqual(-3)
      expect(getSumRecursive(1, -2)).toEqual(-1)
      expect(getSumRecursive(-1, 2)).toEqual(1)
      expect(getSumRecursive(0, 2)).toEqual(2)
      expect(getSumRecursive(-1, 0)).toEqual(-1)
      expect(getSumRecursive(0, 0)).toEqual(0)
    })
  })

  describe('Iterative version', function () {
    it('should return sum', function () {
      expect(getSumRecursive(1, 2)).toEqual(3)
      expect(getSumRecursive(-1, -2)).toEqual(-3)
      expect(getSumRecursive(1, -2)).toEqual(-1)
      expect(getSumRecursive(-1, 2)).toEqual(1)
      expect(getSumRecursive(0, 2)).toEqual(2)
      expect(getSumRecursive(-1, 0)).toEqual(-1)
      expect(getSumRecursive(0, 0)).toEqual(0)
    })
  })
})
