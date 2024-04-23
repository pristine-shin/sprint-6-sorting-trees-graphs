const chai = require("chai");
const expect = chai.expect;

const {
  findAdjacentValidAcresFor,
} = require("../problems/02-graphs-identifying-conservation-areas");

describe("findAdjacentValidAcresFor", () => {
  const mapData1 = [
    [2, 3, 4],
    [2, 2, 3],
    [3, 4, 4]
  ];

  const mapData2 = [
    [2, 1, 4],
    [0, 2, 1],
    [3, 5, 2]
  ];

  it("Only returns NSEW neighbors in the range of >= 2 and <= 4", () => {
    const validNeighbors = findAdjacentValidAcresFor([1, 1], mapData1);
    const noNeighbors = findAdjacentValidAcresFor([1, 1], mapData2);

    expect(validNeighbors.length).to.equal(4);
    expect(validNeighbors).to.have.deep.members([
      [0, 1],
      [1, 0],
      [1, 2],
      [2, 1]
    ]);

    expect(noNeighbors.length).to.equal(0);
    expect(noNeighbors).to.deep.equal([]);
  });

  it("Can find the correct neighbors in a corner of the mapData1", () => {
    const NWNeighbors = findAdjacentValidAcresFor([0, 0], mapData1);
    const SENeighbors = findAdjacentValidAcresFor([2, 2], mapData1);

    expect(NWNeighbors.length).to.equal(2);
    expect(NWNeighbors).to.have.deep.members([
      [0, 1],
      [1, 0]
    ]);

    expect(SENeighbors.length).to.equal(2);
    expect(SENeighbors).to.have.deep.members([
      [1, 2],
      [2, 1]
    ]);
  });
});
