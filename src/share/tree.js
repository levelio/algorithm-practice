class TreeNode {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

class Item {
  constructor(parent, childVal, isLeft) {
    this.parent = parent
    this.childVal = childVal
    this.isLeft = isLeft
  }
}

/**
 *  Array to binaryTree
 * @param  {Array<number>} nums
 */
function buildTree(nums) {
  if (!nums || nums.length === 0) {
    return null
  }
  const dummy = new TreeNode(0)
  const q = [new Item(dummy, nums[0], true)]
  let p = 1

  while (q.length) {
    const item = q.shift()
    const child = item.childVal ? new TreeNode(item.childVal) : null
    if (item.isLeft) {
      item.parent.left = child
    } else {
      item.parent.right = child
    }
    if (child !== null && p < nums.length) {
      q.push(new Item(child, nums[p++], true))
      q.push(new Item(child, nums[p++], false))
    }
  }

  return dummy.left
}

module.exports = {
  buildTree,
  TreeNode,
}
