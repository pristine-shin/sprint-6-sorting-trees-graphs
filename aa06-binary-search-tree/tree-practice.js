const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  let curr = rootNode;

  while (curr.left) {
    curr = curr.left;
  }
  return curr.val;
}

function findMaxBST (rootNode) {
  // Your code here
  let curr = rootNode;

  while (curr.right) {
    curr = curr.right;
  }
  return curr.val;
}

function findMinBT (rootNode) {
  // Your code here
  let queue = [rootNode];
  let min = rootNode.val;

  while (queue.length > 0) {
    const curr = queue.shift();
    min = Math.min(min, curr.val)

    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }

  return min;
}

function findMaxBT (rootNode) {
  // Your code here
  let queue = [rootNode];
  let max = rootNode.val;

  while (queue.length > 0) {
    const curr = queue.shift();
    max = Math.max(max, curr.val)

    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }

  return max;
}

function getHeight (rootNode) {
  // Your code here
  if (!rootNode) return -1;

  if (!rootNode.left && !rootNode.right) return 0;

  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right))
}

function countNodes (rootNode) {
  // Your code here
  if (!rootNode) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function balancedTree (rootNode) {
  // Your code here
  if (!rootNode) return true;

  let leftHeight = getHeight(rootNode.left);
  let rightHeight = getHeight(rootNode.right);

  return ((Math.abs(leftHeight - rightHeight) <= 1) && balancedTree(rootNode.left) && balancedTree(rootNode.right));
}

function getParentNode (rootNode, target) {
  // Your code here
  if (!rootNode) return undefined;//this needs to go before line 97, null and undefined are different?

  if (rootNode.val === target) return null;

  if (rootNode.left !== null && rootNode.left.val === target) return rootNode;

  if (rootNode.right !== null && rootNode.right.val === target) return rootNode;

  let leftResult = getParentNode(rootNode.left, target);
  if (leftResult !== undefined) return leftResult;

  let rightResult = getParentNode(rootNode.right, target);
  if (rightResult !== undefined) return rightResult;

  return undefined;
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
  let curr = rootNode;
  let stack = [];
  let predecessor = null;

  while (true) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else if (!curr && stack.length > 0) {
      curr = stack.pop();

      if (curr.val === target) {
        if (!predecessor) return null;
        return predecessor.val;
      }

      predecessor = curr;
      curr = curr.right;
    } else {
      break;
    }
  }
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent
  let parentNode = getParentNode(rootNode, target);

  // Undefined if the target cannot be found
  if (parentNode === undefined) return undefined;
  // Set target based on parent
  let targetNode;
  let isLeftChild = false;
  if (!parentNode) {
    targetNode = rootNode;
  } else if (parentNode.left && parentNode.left.val === target) {
    targetNode = parentNode.left;
    isLeftChild = true;
  } else if (parentNode.right && parentNode.right.val === target) {
    targetNode = parentNode.right;
  } else {
    throw Error('Wrong')
  }

  // Case 0: Zero children and no parent:
  //   return null
  if (!parentNode && !targetNode.left && !targetNode.right) {
    return null;
  } else if (!targetNode.left && !targetNode.right) {
    // Case 1: Zero children:
    //   Set the parent that points to it to null
    if (isLeftChild) parentNode.left = null;
    else parentNode.right = null;
  } else if (targetNode.left && targetNode.right) {
    // Case 2: Two children:
    //  Set the value to its in-order predecessor, then delete the predecessor
    //  Replace target node with the left most child on its right side,
    //  or the right most child on its left side.
    //  Then delete the child that it was replaced with.
    let predecessor = inOrderPredecessor(rootNode, target);
    deleteNodeBST(rootNode, predecessor);
    targetNode.val = predecessor;
  } else {
    // Case 3: One child:
    //   Make the parent point to the child
    if (targetNode.left) {
      if (isLeftChild) parentNode.left = targetNode.left;
      else parentNode.right = targetNode.left;
    } else {
      if (isLeftChild) parentNode.left = targetNode.right;
      else parentNode.right = targetNode.right;
    }
  }
}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
