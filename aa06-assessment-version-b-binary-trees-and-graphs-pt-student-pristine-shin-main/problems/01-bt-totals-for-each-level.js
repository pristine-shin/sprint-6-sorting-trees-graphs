class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.level = null;
  }
}
/*********************DO NOT MODIFY CODE ABOVE THIS LINE*********************/
/*
  Given a tree, find the total sum for each node at each level in the binary
  tree and return them in an array. The root level is at the 0th index. The
  next level at the 1st index, and so on until the last index of the return
  array has the total sum of the lowest level of the binary tree.

         6
        / \
       3   8
      / \   \
     2  4   1
       /   / \
      12  7  20
     / \
    5  14

  Expected Output -> [ 6, 11, 7, 39, 19 ]
*/

function totalsForEachLevel(root) {
  const stack = [root];
  const levelTotals = [];

  root.level = 0;

  while (stack.length) {
    const node = stack.pop();

    if (levelTotals[node.level]) {
      levelTotals[node.level] += node.value;
    } else {
      levelTotals[node.level] = node.value;
    }

    if (node.left) {
      node.left.level = node.level + 1;
      stack.push(node.left);
    }
    if (node.right) {
      node.right.level = node.level + 1;
      stack.push(node.right);
    }
  }

  return levelTotals;
}

/*
  Uncomment the code below for local testing.

  Build a tree for testing

      4
     / \
    1  16
        \
        11

  Test the function with the debug tree
*/

// const simpleTree = new TreeNode(4);
// simpleTree.left = new TreeNode(1);
// simpleTree.right = new TreeNode(16);
// simpleTree.right.right = new TreeNode(11);

// console.log(totalsForEachLevel(simpleTree)); // -> [4, 17, 11]

/*********************DO NOT MODIFY CODE BELOW THIS LINE*********************/

module.exports = { totalsForEachLevel };
