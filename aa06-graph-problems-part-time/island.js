function getNeighbors(row, col, graph) {
  let neighbors = [];

  // Check top
  if (row - 1 >= 0) {
    let upNeighbor = [row - 1, col];
    if (graph[row - 1][col] === 1) {
      neighbors.push(upNeighbor);
    }
  }

  // Check bottom
  if (row + 1 < graph.length) {
    let bottomNeighbor = [row + 1, col];
    if (graph[row + 1][col] === 1) {
      neighbors.push(bottomNeighbor);
    }
  }

  // Check left
  if (col - 1 >= 0) {
    let leftNeighbor = [row, col - 1];
    if (graph[row][col - 1] === 1) {
      neighbors.push(leftNeighbor);
    }
  }

  // Check right
  if (col + 1 < graph[row].length) {
    let rightNeighbor = [row, col + 1];
    if (graph[row][col + 1] === 1) {
      neighbors.push(rightNeighbor);
    }
  }
  // Return neighbors
  return neighbors;
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();
  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];
  // Put the stringified starting node in visited
  visited.add(`${row}, ${col}`);
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while (stack.length) {
    // Pop the first node
    let curr = stack.pop();

    // DO THE THING (increment size by 1)
    size++//the starting node is already a 1, so we have to count it.

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited

    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!
    let neighbors = getNeighbors(curr[0], curr[1], graph);

    for (let neighbor of neighbors) {
      let neighborStr = `${neighbor[0]}, ${neighbor[1]}`//THIS HAS TO LOOK LIKE LINE 47 SETS ARE STUPID, MAKE THEM MATCH

      if (!visited.has(neighborStr)) {
        visited.add(neighborStr)
        stack.push(neighbor)
      }
    }
  }
  return size;
}

// //zech's code:
// function islandSize(row, col, graph) {
//   // Create a visited set to store visited nodes
//   const visited = new Set();
//   // Create a stack, put the starting node in the stack
//   const stack = [[row, col]];
//   // Put the stringified starting node in visited
//   visited.add(`${row}, ${col}`);
//   // Initialize size to 0
//   let size = 0;
//   // While the stack is not empty,
//   while(stack.length){
//     let curr = stack.pop();
//     size++
//     for(const neighbor of getNeighbors(curr[0], curr[1], graph)){
//       const str = `${neighbor[0]}, ${neighbor[1]}`;
//       if(!visited.has(str)){
//         visited.add(str)
//         stack.push(neighbor);
//       }
//     }
//   }
//   return size;
//     // Pop the first node
//     // DO THE THING (increment size by 1)
//     // Then push all the UNVISITED neighbors on top of the stack
//     // and mark them as visited
//     // HINT: This is what your helper function `getNeighbors` is for
//     // HINT: Remember, you're storing your visited nodes as strings!
//   // return size
//   // Your code here
// }

module.exports = [getNeighbors, islandSize];
