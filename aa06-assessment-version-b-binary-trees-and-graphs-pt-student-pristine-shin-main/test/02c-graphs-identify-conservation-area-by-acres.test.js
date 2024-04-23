const chai = require("chai");
const expect = chai.expect;

const {
  identifyConservationAreaByAcres
} = require('../problems/02-graphs-identifying-conservation-areas');

describe('identifyConservationAreaByAcres', () => {
  const mapData1 = [
    [5, 5, 5, 2, 1],
    [1, 2, 4, 3, 3],
    [1, 2, 2, 3, 5],
    [0, 0, 0, 1, 5]
  ];

  const mapData2 = [
    [1, 1, 1, 0, 0],
    [1, 1, 1, 1, 0],
    [4, 4, 4, 4, 0],
    [4, 3, 4, 0, 0]
  ];

  const mapData3 = [
    [4, 1, 2, 2, 1],
    [3, 0, 1, 1, 2],
    [1, 0, 0, 1, 1],
    [1, 2, 2, 3, 4]
  ];

  const mapData4 = [
    [0, 1, 1, 1, 0],
    [0, 1, 3, 1, 0],
    [0, 1, 2, 1, 0],
    [0, 1, 1, 1, 0]
  ];

  const mapData5 = [
    [1, 2, 3, 5, 5],
    [3, 1, 5, 5, 5],
    [2, 1, 3, 4, 2],
    [2, 1, 3, 3, 0]
  ];

  const mapData6 = [
    [0, 0, 1, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1]
  ];

  it("Finds and returns a valid conservation area", () => {
    const validArea1 = identifyConservationAreaByAcres(mapData1);
    const validArea2 = identifyConservationAreaByAcres(mapData2);

    expect(validArea1).to.have.deep.members([
      [0, 3],
      [1, 3],
      [1, 4],
      [1, 2],
      [1, 1],
      [2, 1],
      [2, 2],
      [2, 3]
    ]);
    expect(validArea2).to.have.deep.members([
      [2, 0],
      [2, 1],
      [2, 2],
      [2, 3],
      [3, 2],
      [3, 1],
      [3, 0]
    ]);
  });

  it("Finds and returns a valid conservation area, but continues searching if it finds an area that is too small", () => {
    const validArea = identifyConservationAreaByAcres(mapData3);
    const smallArea = identifyConservationAreaByAcres(mapData4);

    expect(validArea).to.have.deep.members([
      [3, 1],
      [3, 2],
      [3, 3],
      [3, 4]
    ]);
    expect(smallArea).to.equal(null);
  });

  it("Finds and returns a valid conservation area, but returns null if no valid areas are found", () => {
    const validArea = identifyConservationAreaByAcres(mapData5);
    const noArea = identifyConservationAreaByAcres(mapData6);

    expect(validArea).to.have.deep.members([
      [2, 2],
      [2, 3],
      [2, 4],
      [3, 2],
      [3, 3]
    ]);
    expect(noArea).to.equal(null);
  });
});
