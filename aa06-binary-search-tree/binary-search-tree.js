// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      // Your code here
      this.root = null;
    }

    insert(val, currentNode=this.root) {
      // Your code here
      if (!this.root) {
        this.root = new TreeNode(val);
        return;
      }

      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = new TreeNode(val);
        } else {
          this.insert(val, currentNode.left);
        }

      } else { //BST nodes must be unique and sorted
        if (!currentNode.right) {
          currentNode.right = new TreeNode(val);
        } else {
          this.insert(val, currentNode.right);
        }
      }
    }

    search(val) {
      // Your code here
      let currentNode = this.root;

      while (currentNode) {
        if (val === currentNode.val) return true;

        if (val < currentNode.val) currentNode = currentNode.left;

        else currentNode = currentNode.right;
      }
      return false;
    }


    preOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return;

      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }


    inOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return;

      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }


    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if (!currentNode) return;

      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // Your code here
      let queue  = [this.root];
      while (queue.length > 0) {
        const curr = queue.shift();
        console.log(curr.val);

        if (curr.left) {
          queue.push(curr.left);
        }
        if (curr.right) {
          queue.push(curr.right);
        }
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // Your code here
      let stack = [this.root];
      while (stack.length > 0) {
        const curr = stack.pop();
        console.log(curr.val);

        if (curr.left) {
          stack.push(curr.left);
        }

        if (curr.right) {
          stack.push(curr.right);
        }
      }
    }
  }

  module.exports = { BinarySearchTree, TreeNode };
