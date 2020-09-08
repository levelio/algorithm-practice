const { buildTree } = require('../share/tree')
const { isSymmetricRecursive } = require('./isSymmetricRecursive')
const { isSymmetricIterative } = require('./isSymmetricIterative')

/*
  tree1:
        1
      /   \
     2     2
    / \   / \
   4   8 8   4
*/
const tree1 = buildTree([1, 2, 2, 4, 8, 8, 4])
/*
  tree2:
        1
      /   \
     2     2
    / \   /
   4   8 8
*/
const tree2 = buildTree([1, 2, 2, 4, 8, 8, null])
/*
  tree3:
        1
      /   \
     2     2
      \     \
       3     3 
*/
const tree3 = buildTree([1, 2, 2, null, 3, null, 3])
/*
  tree4:
        1
          \
           2
            \
             3 
*/
const tree4 = buildTree([1, null, 2, null, 3])
const tree5 = buildTree(null)

describe('problem-101 #isSymmetric', () => {
  describe('Recursive version', () => {
    test('should check whether it is a mirror of itself', () => {
      expect(isSymmetricRecursive(tree1)).toBe(true)
      expect(isSymmetricRecursive(tree2)).toBe(false)
      expect(isSymmetricRecursive(tree3)).toBe(false)
      expect(isSymmetricRecursive(tree4)).toBe(false)
      expect(isSymmetricRecursive(tree5)).toBe(true)
    })
  })

  describe('Iterative version', () => {
    test('should check whether it is a mirror of itself', () => {
      expect(isSymmetricIterative(tree1)).toBe(true)
      expect(isSymmetricIterative(tree2)).toBe(false)
      expect(isSymmetricIterative(tree3)).toBe(false)
      expect(isSymmetricIterative(tree4)).toBe(false)
      expect(isSymmetricIterative(tree5)).toBe(true)
    })
  })
})
