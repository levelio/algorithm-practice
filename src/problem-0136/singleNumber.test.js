const { singleNumberWithXOR } = require('./singleNumber')
const { singleNumberWithSet } = require('./singleNumberWithSet')

describe('problem-136 #singleNumber', () => {
  describe('XOR version', function () {
    it('should return single number', function () {
      expect(singleNumberWithXOR([2, 2, 1])).toEqual(1)
      expect(singleNumberWithXOR([4, 1, 2, 1, 2])).toEqual(4)
    })
  })

  describe('Set version', function () {
    it('should return single number', function () {
      expect(singleNumberWithSet([2, 2, 1])).toEqual(1)
      expect(singleNumberWithSet([4, 1, 2, 1, 2])).toEqual(4)
    })
  })
})
