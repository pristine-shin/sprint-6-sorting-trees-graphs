const chai = require("chai");
const expect = chai.expect;

const {
  getValidConservationArea,
} = require("../problems/02-graphs-identifying-conservation-areas");

describe('getValidConservationArea', () => {
  let visited1;
  let visited2;

  const mapData1 = [
    [5, 5, 5, 5, 5],
    [1, 1, 1, 3, 4],
    [0, 0, 1, 2, 2],
    [0, 0, 1, 2, 2]
  ];

  const mapData2 = [
    [4, 1, 1, 2, 1],
    [2, 3, 2, 3, 1],
    [1, 0, 1, 4, 5],
    [1, 0, 1, 5, 5]
  ];

  const mapData3 = [
    [5, 1, 0, 0, 0],
    [5, 2, 2, 1, 0],
    [5, 5, 2, 1, 0],
    [5, 5, 1, 0, 0]
  ];

  beforeEach(() => {
    visited1 = new Set();
    visited2 = new Set();
  });
  
  it("Can traverse a valid area and returns an array of its coordinates", () => {
    const validArea1 = getValidConservationArea([2, 4], mapData1, visited1);
    const validArea2 = getValidConservationArea([1, 3], mapData2, visited2);

    expect(validArea1).to.have.deep.members([
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 3],
      [3, 4]
    ]);
    expect(validArea2).to.have.deep.members([
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [0, 3],
      [2, 3]
    ]);
  });

  it("Can traverse a valid area and returns an array of its coordinates, but returns null if the start node is invalid", () => {
    const validArea = getValidConservationArea([3, 4], mapData1, visited2);
    const invalidStart = getValidConservationArea([1, 2], mapData1, visited1);

    expect(validArea).to.have.deep.members([
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 3],
      [3, 4]
    ]);
    expect(invalidStart).to.equal(null);
  });

  it("Can traverse a valid area and returns an array of its coordinates, but returns null if areas are too small", () => {
    const validArea = getValidConservationArea([2, 3], mapData2, visited1);
    const invalidArea = getValidConservationArea([2, 2], mapData3, visited2);

    expect(validArea).to.have.deep.members([
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
      [1, 3],
      [0, 3],
      [2, 3]
    ]);
    expect(invalidArea).to.equal(null);
  });
});
