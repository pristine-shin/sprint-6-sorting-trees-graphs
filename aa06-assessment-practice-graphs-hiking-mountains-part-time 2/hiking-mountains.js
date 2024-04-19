function findPeak(matrix) {
    let highest = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[i][k] > highest) {
                highest = matrix[i][k];
            }
        }
    }

    return highest;
}

function findStarts(matrix) {
    let starts = [];

    // Top Row
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            starts.push([0, i])
        }
    }

    // Bottom Row
    for (let i = 0; i < matrix[matrix.length-1].length; i++) {
        if (matrix[matrix.length-1][i] == 0) {
            starts.push([matrix.length-1, i])
        }
    }

    // Left except first and last
    for (let i = 1; i < matrix.length-1; i++) {
        if (matrix[i][0] == 0) {
            starts.push([i, 0])
        }
    }

    // Right except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][matrix[0].length - 1] == 0) {
            starts.push([i, matrix[0].length-1])
        }
    }

    return starts;
}

function findNeighbors(node, matrix) {
    let neighbors = [];
    let [row, col] = node;
    //up
    if (row - 1 >= 0) {
        let upNeighbor = [row - 1, col];
        if (Math.abs((matrix[row][col]) - (matrix[row - 1][col])) <= 1) {
            neighbors.push(upNeighbor);
        }
    }
    //down
    if (row + 1 < matrix.length) {
        let downNeighbor = [row + 1, col];
        if (Math.abs((matrix[row][col]) - (matrix[row + 1][col])) <= 1) {
            neighbors.push(downNeighbor);
        }
    }

    //left
    if (col - 1 >= 0) {
        let leftNeighbor = [row, col - 1];
        if (Math.abs((matrix[row][col]) - (matrix[row][col - 1])) <= 1) {
            neighbors.push(leftNeighbor);
        }
    }

    //right
    if (col + 1 < matrix[row].length) {
        let rightNeighbor = [row, col + 1];
        if (Math.abs((matrix[row][col]) - (matrix[row][col + 1])) <= 1) {
            neighbors.push(rightNeighbor);
        }
    }

    // Don't forget to include diagonal neighbors!!!
    //diagonal up/left
    if (row - 1 >= 0 && col - 1 >= 0) {
        let diagonalUpLeft = [row - 1, col - 1];
        if (Math.abs((matrix[row][col]) - (matrix[row - 1][col - 1])) <= 1) {
            neighbors.push(diagonalUpLeft);
        }
    }

    //diagonal up/right
    if (row - 1 >= 0 && col + 1 < matrix[row].length) {
        let diagonalUpRight = [row - 1, col + 1];
        if (Math.abs((matrix[row][col]) - (matrix[row - 1][col + 1])) <= 1) {
            neighbors.push(diagonalUpRight);
        }
    }

    //diagonal down/left
    if (row + 1 >= 0 && col - 1 >= 0) {
        let diagonalDownLeft = [row + 1, col - 1];
        if (Math.abs((matrix[row][col]) - (matrix[row + 1][col - 1])) <= 1) {
            neighbors.push(diagonalDownLeft);
        }
    }

    //diagonal down/right
    if (row + 1 < matrix.length && col + 1 < matrix[row].length) {
        let diagonalDownRight = [row + 1, col + 1];
        if (Math.abs((matrix[row][col]) - (matrix[row + 1][col + 1])) <= 1) {
            neighbors.push(diagonalDownRight);
        }
    }

    return neighbors;
}

function pathTraversal(node, matrix, visited, peak) {
    // Your code here
    const queue = [node];
    visited.add(`${node[0]}, ${node[1]}`);

    while (queue.length) {
        const current = queue.shift();

        if (matrix[current[0]][current[1]] === peak) return true;

        let neighbors = findNeighbors(current, matrix);
        console.log(neighbors);

        for (let neighbor of neighbors) {
            let neighborStr = `${neighbor[0]}, ${neighbor[1]}`

            if (!visited.has(neighborStr)) {
                visited.add(neighborStr);
                queue.push(neighbor);
            }
        }
    }
    return false;
}

function identifyPath(mountain) {
    // Find the peak
    // Find the start

    // Traverse from the starts and try to get to the top
    // Your code here
}

// Uncomment for local testing

// Example 0
const mountain_0 = [
    [1, 2, 4],
    [4, 5, 9],
    [5, 7, 6]
];

console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// Example 1
const mountain_1 = [
        [1, 0, 1, 1],
        [2, 3, 2, 1],
        [0, 2, 4, 1],
        [3, 2, 3, 1]
];

const mountain_2 = [
    [7, 8, 9, 1, 1],
    [1, 6, 5, 2, 8],
    [0, 1, 5, 1, 3],
    [1, 4, 3, 4, 0]
  ];

test_visited = new Set()
console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
console.log(pathTraversal([2, 0], mountain_1, test_visited, 4)) // <- Expect 'false

test_visited2 = new Set()
console.log(pathTraversal([3, 4], mountain_2, test_visited2, 9)) // <- Expect 'true

// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'



/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
