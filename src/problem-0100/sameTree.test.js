const { isSameTreeRecursive } = require('./sameTreeRecursive')
const { isSameTreeIterative } = require('./sameTreeIterative')
const { buildTree } = require('../share/tree')

describe('Problem-100 #isSameTree', function () {
  /*
  Same Tree: true
   null       null
  Same Tree: false
   null        1
  Same Tree: false
    1         null
  Same Tree: true
     1          1
    / \        / \
   2   4      2   4
  Same Tree: false
     1          1
    / \        / \
   2   4      2   5
  Same Tree: false
     1          1
    / \        /
   2   4      2
             /
            4
   */

  describe('Recursive version', function () {
    test('should check if they are the same or not', function () {
      expect(isSameTreeRecursive(null, null)).toEqual(true)
      expect(isSameTreeRecursive(null, buildTree([1]))).toEqual(false)
      expect(isSameTreeRecursive(buildTree([1]), null)).toEqual(false)
      expect(isSameTreeRecursive(buildTree([1, 2, 4]), buildTree([1, 2, 4]))).toEqual(true)
      expect(isSameTreeRecursive(buildTree([1, 2, 4]), buildTree([1, 2, 5]))).toEqual(false)
      expect(isSameTreeRecursive(buildTree([1, 2, 4]), buildTree([1, 2, null, 4, null]))).toEqual(
        false
      )
    })
  })

  describe('Recursive version', function () {
    test('should check if they are the same or not', function () {
      expect(isSameTreeIterative(null, null)).toEqual(true)
      expect(isSameTreeIterative(null, buildTree([1]))).toEqual(false)
      expect(isSameTreeIterative(buildTree([1]), null)).toEqual(false)
      expect(isSameTreeIterative(buildTree([1, 2, 4]), buildTree([1, 2, 4]))).toEqual(true)
      expect(isSameTreeIterative(buildTree([1, 2, 4]), buildTree([1, 2, 5]))).toEqual(false)
      expect(isSameTreeIterative(buildTree([1, 2, 4]), buildTree([1, 2, null, 4, null]))).toEqual(
        false
      )
    })
  })
})
