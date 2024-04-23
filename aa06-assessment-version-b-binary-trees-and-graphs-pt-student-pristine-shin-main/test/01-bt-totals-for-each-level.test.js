const chai = require("chai");
const expect = chai.expect;

const { totalsForEachLevel } = require("../problems/01-bt-totals-for-each-level");

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.level = null;
  }
}

describe("Simple Tree", () => {
  describe("totalsForEachLevel", () => {
    it(`Produces an array with the sum totals for each level`, () => {
      const simpleTree = new TreeNode(9);
      simpleTree.left = new TreeNode(1);
      simpleTree.right = new TreeNode(3);
      simpleTree.right.left = new TreeNode(2);

      /* simpleTree
          9
         / \
        1   3
           /
          2
      */

      const totals = totalsForEachLevel(simpleTree);
      const expectedOutput = [9, 4, 2];

      expect(totals).to.deep.equal(expectedOutput);
    });
  });
});

describe("Triangle tree", () => {
  describe("totalsForEachLevel", () => {
    it(`Produces an array with the sum totals for each level`, () => {
      const triangleTree = new TreeNode(6);
      triangleTree.left = new TreeNode(3);
      triangleTree.left.left = new TreeNode(5);
      triangleTree.left.left.left = new TreeNode(9);
      triangleTree.right = new TreeNode(4);
      triangleTree.right.right = new TreeNode(1);
      triangleTree.right.right.right = new TreeNode(2);

      /* triangleTree
              6
             / \
            3   4
           /     \
          5       1
         /         \
        9           2
      */

      const totals = totalsForEachLevel(triangleTree);
      const expectedOutput = [6, 7, 6, 11];

      expect(totals).to.deep.equal(expectedOutput);
    });
  });
});

describe("Imbalanced Tree", () => {
  describe("totalsForEachLevel", () => {
    it(`Produces an array with the sum totals for each level`, () => {
      const imbalancedTree = new TreeNode(3);
      imbalancedTree.left = new TreeNode(11);
      imbalancedTree.left.right = new TreeNode(14);
      imbalancedTree.left.right.left = new TreeNode(6);
      imbalancedTree.right = new TreeNode(7);
      imbalancedTree.right.right = new TreeNode(2);
      imbalancedTree.right.left = new TreeNode(8);
      imbalancedTree.right.right.left = new TreeNode(21);
      imbalancedTree.right.right.left.right = new TreeNode(1);

      /* imbalancedTree
             3
           /   \
         11     7
           \   / \
          14  8   2
         /      /
        6     21
               \
                1
      */

      const totals = totalsForEachLevel(imbalancedTree);
      const expectedOutput = [3, 18, 24, 27, 1];

      expect(totals).to.deep.equal(expectedOutput);
    });
  });
});

describe("Large Numbers Tree", () => {
  describe("totalsForEachLevel", () => {
    it(`Produces an array with the sum totals for each level`, () => {
      const largeNumbersTree = new TreeNode(44);
      largeNumbersTree.left = new TreeNode(22);
      largeNumbersTree.right = new TreeNode(101);
      largeNumbersTree.left.left = new TreeNode(74);
      largeNumbersTree.left.right = new TreeNode(80);
      largeNumbersTree.right.left = new TreeNode(712);
      largeNumbersTree.left.left.left = new TreeNode(41);
      largeNumbersTree.left.left.right = new TreeNode(56);
      largeNumbersTree.right.left.left = new TreeNode(300);
      largeNumbersTree.right.left.right = new TreeNode(198);

      const totals = totalsForEachLevel(largeNumbersTree);
      const expectedOutput = [44, 123, 866, 595];

      /* largeNumbersTree
                 44
               /    \
             22     101
            / \    /  \
          74  80 712   1
         / \    /  \
        41 56 300  198
      */

      expect(totals).to.deep.equal(expectedOutput);
    });
  });
});

describe("Negative Numbers Tree", () => {
  describe("totalsForEachLevel", () => {
    it(`Produces an array with the sum totals for each level`, () => {
      const negativeNumbersTree = new TreeNode(-7);
      negativeNumbersTree.left = new TreeNode(-4);
      negativeNumbersTree.left.left = new TreeNode(-5);
      negativeNumbersTree.left.right = new TreeNode(-9);
      negativeNumbersTree.left.right.left = new TreeNode(-4);
      negativeNumbersTree.right = new TreeNode(-6);
      negativeNumbersTree.right.right = new TreeNode(-1);
      negativeNumbersTree.right.right.left = new TreeNode(-6);
      negativeNumbersTree.right.right.right = new TreeNode(-8);
      negativeNumbersTree.right.right.right.left = new TreeNode(-2);
      negativeNumbersTree.right.right.right.right = new TreeNode(-3);

      /* negativeNumbersTree
                 -7
               /    \
             -4     -6
            / \       \
          -5  -9      -1
             /       /  \
           -4      -6   -8
                        / \
                      -2  -3
      */

      const totals = totalsForEachLevel(negativeNumbersTree);
      const expectedOutput = [-7, -10, -15, -18, -5];

      expect(totals).to.deep.equal(expectedOutput);
    });
  });
});

describe("Complex Tree", () => {
  describe("totalsForEachLevel", () => {
    it(`Produces an array with the sum totals for each level`, () => {
      const complexTree = new TreeNode(-5);
      complexTree.left = new TreeNode(4);
      complexTree.left.left = new TreeNode(1);
      complexTree.left.left.left = new TreeNode(9);
      complexTree.left.left.right = new TreeNode(11);
      complexTree.left.right = new TreeNode(3);
      complexTree.left.right.left = new TreeNode(-8);
      complexTree.left.right.right = new TreeNode(2);
      complexTree.left.right.right.left = new TreeNode(31);
      complexTree.right = new TreeNode(7);
      complexTree.right.right = new TreeNode(20);
      complexTree.right.right.left = new TreeNode(-4);
      complexTree.right.right.left.left = new TreeNode(5);
      complexTree.right.right.left.right = new TreeNode(6);
      complexTree.right.right.right = new TreeNode(-91);
      complexTree.right.right.right.left = new TreeNode(24);
      complexTree.right.right.right.right = new TreeNode(4);

      /* complexTree
                   -5
                /     \
              4        7
             / \     /  \
           1    3   -4  20
         / \   / \  / \   \
        9  11 -8 2 5   6  -91
                /        /  \
              31       24    4
      */

      const totals = totalsForEachLevel(complexTree);
      const expectedOutput = [-5, 11, 24, -81, 70];

      expect(totals).to.deep.equal(expectedOutput);
    });
  });
});
