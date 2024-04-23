/*
  findAdjacentValidAcresFor takes a coordinate as `startingAcre` as an argument
  and checks for valid adjacent acres in `mapData` that meet the elevation
  requirements of a valid conservation area, then returns them in an array.
*/
function findAdjacentValidAcresFor(startingAcre, mapData) {
  // Only consider N, S, E, W acres
  let neighbors = [];
  let [row, col] = startingAcre;

  // North
  if (row - 1 >= 0) {
    let north = [row - 1, col];
    if (mapData[row - 1][col] >= 2 && mapData[row - 1][col] <= 4) {
      neighbors.push(north);
    }
  }

  // South
  if (row + 1 < mapData.length) {
    let south = [row + 1, col];
    if (mapData[row + 1][col] >= 2 && mapData[row + 1][col] <= 4) {
      neighbors.push(south);
    }
  }

  // East
  if (col - 1 >= 0) {
    let east = [row, col - 1];
    if (mapData[row][col - 1] >= 2 && mapData[row][col - 1] <= 4) {
      neighbors.push(east);
    }
  }

  // West
  if (col + 1 < mapData[row].length) {
    let west = [row, col + 1];
    if (mapData[row][col + 1] >= 2 && mapData[row][col + 1] <= 4) {
      neighbors.push(west);
    }
  }
  return neighbors;
}

/*
  getValidConservationArea takes in a coordinate as `startingAcre` as a
  starting coordinate to traverse from in `mapData`.

  The `visited` parameter is a Set used to keep track of visited coordinates.

  If the `startingAcre` is not a valid coordinate, do not traverse and instead
  return null.

  If a valid conservation area of sufficient length is found, return those
  coordinates in an array otherwise return null.
*/
function getValidConservationArea(startingAcre, mapData, visited) {
  // Don't bother traversing if startingAcre is not valid
  if (mapData[startingAcre[0]][startingAcre[1]] < 2 || mapData[startingAcre[0]][startingAcre[1]] > 4) return null;
  // Traverse the potential forest area to gather valid coordinates
  let queue = [startingAcre];
  const path = [];
  visited.add(`${startingAcre[0]},${startingAcre[1]}`);

  while (queue.length) {
    const curr = queue.shift();

    path.push(curr);

    let neighbors = findAdjacentValidAcresFor(curr, mapData);

    for (let neighbor of neighbors) {
      let neighborStr = `${neighbor[0]},${neighbor[1]}`;

      if (!visited.has(neighborStr)) {
        visited.add(neighborStr);

        queue.push(neighbor);
    }
    }
  }
  if (path.length >= 4) return path;
  else return null;
}

/*
  identifyConservationAreaByAcres takes in `mapData`. This `mapData` must be
  traversed to determine if there is a valid conservation area.

  If valid conservation area is found return those coordinates in an array,
  otherwise return null.
*/
function findStartingAcre(mapData) {
  let starts = [];

  for (let r = 0; r < mapData.length; r++) {
    for (let c = 0; c < mapData[0].length; c++) {
      if (mapData[r][c] >= 2 && mapData[r][c] <= 4) {
        starts.push([r, c])
      }
    }
  }
  return starts;
}

function identifyConservationAreaByAcres(mapData) {
  // Start at 0,0 and attempt to traverse any unvisited coordinates
  let starts = findStartingAcre(mapData);
  let visited = new Set();
  let results = [];

  for (let start of starts) {
    results.push(getValidConservationArea(start, mapData, visited));
  }

  for (let result of results) {
    if (Array.isArray(result)) {
      return result;
    }
  }
  return null;
}

/* Uncomment for local testing */

// // findAdjacentValidAcresFor examples
// const mapData1 = [
//   [1, 5, 4],
//   [0, 2, 3],
//   [1, 2, 2],
// ];

// console.log(findAdjacentValidAcresFor([1, 1], mapData1));
// // => [[2, 1], [1, 2]]
// console.log(findAdjacentValidAcresFor([0, 2], mapData1));
// => [[1, 2]]

// // getValidConservationArea examples
// const mapData2 = [
//   [2, 1, 3, 4, 5],
//   [3, 1, 2, 3, 5],
//   [2, 1, 1, 1, 0],
//   [1, 1, 0, 0, 0],
// ];
// const visited1 = new Set();
// const visited2 = new Set();

// console.log(getValidConservationArea([0, 0], mapData2, visited1));
// // => null
// console.log(getValidConservationArea([0, 2], mapData2, visited2));
// // => [ [ 0, 2 ], [ 0, 3 ], [ 1, 3 ], [ 1, 2 ] ]


// // identifyConservationAreaByAcres example 1
const mapData3 = [
  [0, 1, 5, 5, 5],
  [0, 2, 2, 3, 5],
  [0, 1, 2, 3, 5],
  [0, 0, 1, 1, 1],
];

console.log(identifyConservationAreaByAcres(mapData3));
// => [ [ 1, 1 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 2, 2 ] ]
console.log('---------------------------------------')

// identifyConservationAreaByAcres example 2
const mapData4 = [
  [2, 1, 3, 4, 5],
  [3, 1, 2, 3, 5],
  [2, 1, 1, 1, 0],
  [1, 1, 0, 0, 0],
];
console.log(identifyConservationAreaByAcres(mapData4));
// => [ [ 0, 2 ], [ 0, 3 ], [ 1, 3 ], [ 1, 2 ] ]
console.log('---------------------------------------')

// identifyConservationAreaByAcres example 3
const mapData5 = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [5, 4, 4, 4, 1],
  [5, 5, 5, 5, 5],
];
console.log(identifyConservationAreaByAcres(mapData5));
// => null

/*********************DO NOT MODIFY CODE BELOW THIS LINE*********************/

module.exports = {
  identifyConservationAreaByAcres,
  getValidConservationArea,
  findAdjacentValidAcresFor
};
