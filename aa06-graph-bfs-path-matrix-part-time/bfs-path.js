function findNeighbors(node, matrix) {
    let neighbors = [];
    const nodeRow = node[0];
    const nodeColumn = node[1];

    // Up
    if (nodeRow - 1 >= 0) {
        const upNeighbor = [nodeRow - 1, nodeColumn];
        neighbors.push(upNeighbor);
    }

    // Down
    if (nodeRow + 1 < matrix.length) {
        const downNeighbor = [nodeRow + 1, nodeColumn];
        neighbors.push(downNeighbor);
    }

    // Left
    if (nodeColumn - 1 >= 0) {
        const leftNeighbor = [nodeRow, nodeColumn - 1];
        neighbors.push(leftNeighbor);
    }
    // Right
    if (nodeColumn + 1 < matrix[nodeRow].length) {
        const rightNeighbor = [nodeRow, nodeColumn + 1];
        neighbors.push(rightNeighbor);
    }
    return neighbors;
}


function bfsPath(matrix, startNode, endValue) {
    // Your code here
    const queue = [startNode];
    const visited = new Set();
    const path = [];
    visited.add(`${startNode[0]},${startNode[1]}`);

    while (queue.length) {
        const current = queue.shift();

        path.push(current);

        if (matrix[current[0]][current[1]] === endValue) {
            return path;
        }

        let neighbors = findNeighbors(current, matrix);

        for (let neighbor of neighbors) {
            let neighborStr = `${neighbor[0]},${neighbor[1]}`;

            if (!visited.has(neighborStr)); {
                visited.add(neighborStr);

                queue.push(neighbor);
            }
        }
    }
    return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

// const matrix1 = [
//     [  1,  2,  3,  4 ],
//     [  5,  6,  7,  8 ],
//     [  9, 10, 11, 12 ],
//     [ 13, 14, 15, 16 ]
// ];

// let readMatrixValues = (matrix) => {
//     for (let row = 0; row < matrix.length; row++) {
//         for (let col = 0; col < matrix[0].length; col++) {
//             console.log(matrix1[row][col]);
//         }
//     }
// }
// console.log(readMatrixValues(matrix1))

// // EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// internal node (left, right, down, up)
// [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// // returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// // Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// // 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
