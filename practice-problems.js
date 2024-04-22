//depth first traversal of graph from alvin

//iterative
// const depthFirstPrint = (graph, source) => {
//     const stack = [source];

//     while (stack.length > 0) {
//         const current = stack.pop();
//         console.log(current);
//         for (let neighbor of graph[current]) {
//             stack.push(neighbor)
//         }
//     }
// }

//recursive (we can do this because recursion relies on the call stack, and depth first requires a stack)
// const depthFirstPrint = (graph, source) => {
//     console.log(source);
//     for (let neighbor of graph[source]) {
//         depthFirstPrint(graph, neighbor);
//     }
// }

//note: we dont need a traditional base case here because once the for loop hits a neighbor that is a dead end (no neighbors), it wont do a recursive call.


//breadth first must have a queue, and cannot be done recursively! (just like trees)

// const breadthFirstPrint = (graph, source) => {
//     const queue = [source];

//     while (queue.length > 0) {
//         const current = queue.shift();
//         console.log(current);
//         for (let neighbor of graph[current]) {
//             queue.push(neighbor);
//         }
//     }
// }


// const graph = {
//     a: ['c', 'b'],
//     b: ['d'],
//     c: ['e'],
//     d: ['f'],
//     e: [],
//     f: []
// };

// breadthFirstPrint(graph, 'a'); // acbedf

// depthFirstPrint(graph, 'a') // abdfce

/*a/A practice problems*****************************************************************************/

// const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5, 6],
//     5: [1, 2, 4],
//     6: [4]
//   }
//iterative solution:
//   function printDepthFirst(start) {
//     // your code here
//     const stack = [start];
//     const visitedNodes = new Set([start]);

//     while (stack.length > 0) {
//         const current = stack.pop();
//         console.log(current);
//         for (let neighbor of adjList[current]) {
//             if (!visitedNodes.has(neighbor)) {
//                 visitedNodes.add(neighbor);
//                 stack.push(neighbor);
//             }
//         }
//     }
//   }

  // console.log("First Test:")
  // printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
  //                     // One possible solution:  3, 4, 6, 5, 1, 2
  // console.log("Second Test:")
  // printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
  //                     // One possible solution:  6, 4, 5, 2, 1, 3
  // console.log("Third Test:")
  // printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
  //                     // One possible solution:  4, 6, 5, 2, 1, 3

/****Breadth-First Traversal******************************************************************/

//   function printBreadthFirst(start) {
//     // your code here
//     const queue = [start];
//     let visitedNotes = new Set([start]);

//     while (queue.length > 0) {
//         const current = queue.shift();
//       console.log(current);
//       for (let neighbor of adjList[current]) {
//         if (!visitedNotes.has(neighbor)) {
//             visitedNotes.add(neighbor);
//             queue.push(neighbor);
//         }
//       }
//     }
//   }

//   console.log("First Test:")
//   printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
//                         // One possible solution:  3, 2, 4, 1, 5, 6
//   console.log("Second Test:")
//   printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
//                         // One possible solution:  6, 4, 3, 5, 2, 1
//   console.log("Third Test:")
//   printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                         // One possible solution:  4, 3, 5, 6, 2, 1

/*Refactor Breadth-First Traversal******************************************************************/

/*The output of your printBreadthFirst function is a bit messy.  Copy it here, and refactor it so that
instead of printing each node on a newline, the function adds each node to an array, then prints that
array at the end.*/

// function printBreadthFirst(start) {
//   // your code here
//   const queue = [start];
//   let visitedNotes = new Set([start]);
//   let result = [];

//   while (queue.length > 0) {
//     const current = queue.shift();
//     result.push(current);

//     for (let neighbor of adjList[current]) {
//       if (!visitedNotes.has(neighbor)) {
//           visitedNotes.add(neighbor);
//           queue.push(neighbor);
//       }
//     }
//   }
//   console.log(result);
// }

// console.log("First Test:")
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
//                       // One possible solution:  [ 3, 2, 4, 1, 5, 6 ]
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
//                       // One possible solution:  [ 6, 4, 3, 5, 2, 1 ]
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                       // One possible solution:  [ 4, 3, 5, 6, 2, 1 ]

/******************************************************************************/

//hasPath aka search function, returns true if there is a path from the source to the destination, false
//if not for a DIRECTED, ACYCLIC graph (so far we have not done any cyclical stuff)

//depth first with recursion
// const hasPath = (graph, src, dst) => {
//     if (src === dst) return true;

//     for (let neighbor of graph[src]) {
//         if (hasPath(graph, neighbor, dst) === true) {
//             return true;
//         }
//     }
//     return false;
// }

//breadth first hasPath:
// const hasPath = (graph, src, dst) => {
//     const queue = [src];

//     while (queue.length > 0) {
//         const current = queue.shift();

//         if (current === dst) return true;

//         for (let neighbor of graph[current]) {
//             queue.push(neighbor);
//         }
//     }
//     return false;
// }

// const graph = {
//     f: ['g', 'i'],
//     g: ['h'],
//     h: [],
//     i: ['g', 'k'],
//     j: ['i'],
//     k: []
// };

// console.log(hasPath(graph, 'f', 'k')); //true
/******************************************************************************/

//How to convert an array of edges to an adjacency list:
// const buildGraph = (edges) => {
//   const graph = {};

//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!(a in graph)) graph[a] = [];
//     if (!(b in graph)) graph[b] = [];
//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// };

// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n'],
// ]

// //traversing an undirected path:
// const undirectedPath = (edges, nodeA, nodeB) => {
//   const graph = buildGraph(edges);
//   return hasPath(graph, nodeA, nodeB, new Set());
// };

// //helper function hasPath/search for undirected/cyclical graphs:
// const hasPath = (graph, src, dst, visited) => {
//   if (src === dst) return true;
//   if (visited.has(src)) return false;

//   visited.add(src);

//   for (let neighbor of graph[src]) {
//     if (hasPath(graph, neighbor, dst, visited) === true) {
//       return true;
//     }
//   }
//   return false;
// }
// console.log(undirectedPath(edges, 'j', 'm')); // true

/******************************************************************************/
//counting diff components (disconnected graph parts) in a graph
// const connectedComponentsCount = (graph) => {
//   const visited = new Set();
//   let count = 0;

//   for (let node in graph) {
//     if (explore(graph, node, visited) === true) {
//       count++;
//     }
//   }

//   return count;
// };

// const explore = (graph, current, visited) => {
//   if (visited.has(String(current))) return false;

//   visited.add(String(current));

//   for (let neighbor of graph[current]) {
//     explore(graph, neighbor, visited);
//   }

//   return true;
// }
// console.log(connectedComponentsCount({
//   0: [8, 1, 5],
//   1: [0],
//   5: [0, 8],
//   8: [0, 5],
//   2: [3, 4],
//   3: [2, 4],
//   4: [3, 2]
// })); // -> 2

/******************************************************************************/
//returning the largest component SIZE (number of nodes) in a graph
// const largestComponent = (graph) => {
//   const visited = new Set();
//   let longest = 0;
//   for (let node in graph) {
//     const size = exploreSize(graph, node, visited);
//     if (size > longest) longest = size;
//   }
//   return longest;
// };

// const exploreSize = (graph, node, visited) => {
//   if (visited.has(node)) return 0;

//   visited.add(node);

//   let size = 1;

//   for (let neighbor of graph[node]) {
//     size += exploreSize(graph, neighbor, visited);
//   }

//   return size;
// }

// console.log(largestComponent({
//   3: [],
//   4: ['6'],
//   6: ['4', '5', '7', '8'],
//   8: ['6'],
//   7: ['6'],
//   5: ['6'],
//   1: ['2'],
//   2: ['1']
// })); // -> 5

/******************************************************************************/
//SHORTEST PATH!!!! This one (alvin's example) returns the length (number of edges) of the shortest path.
// const shortestPath = (edges, nodeA, nodeB) => {
//   const graph = buildGraph(edges);
//   const visited = new Set([nodeA]);
//   const queue = [[nodeA, 0]];

//   while (queue.length > 0) {
//     const [node, distance] = queue.shift();

//     if (node === nodeB) return distance;

//     for (let neighbor of graph[node]) {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         queue.push([neighbor, distance + 1]);
//       }
//     }
//   }

//   return -1;
// };

// const buildGraph = (edges) => {
//   const graph = {};

//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!(a in graph)) graph[a] = [];
//     if (!(b in graph)) graph[b] = [];
//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   return graph;
// };

// const edges1 = [
//   ['a', 'c'],
//   ['a', 'b'],
//   ['c', 'b'],
//   ['c', 'd'],
//   ['b', 'd'],
//   ['e', 'd'],
//   ['g', 'f']
// ];

// console.log(shortestPath(edges1, 'a', 'e')); // -> 3

// const edges2 = [
//   ['m', 'n'],
//   ['n', 'o'],
//   ['o', 'p'],
//   ['p', 'q'],
//   ['t', 'o'],
//   ['r', 'q'],
//   ['r', 's']
// ];

// console.log(shortestPath(edges2, 'm', 's')); // -> 6

// const edges3 = [
//   ['a', 'c'],
//   ['a', 'b'],
//   ['c', 'b'],
//   ['c', 'd'],
//   ['b', 'd'],
//   ['e', 'd'],
//   ['g', 'f']
// ];

// console.log(shortestPath(edges3, 'b', 'g')); // -> -1
// /******************************************************************************/
// //SHORTEST PATH a/A example where it prints/returns the shortest path, instead of the length of the shortest path like the previous example:

// const adjList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5],
//   5: [1, 2, 4],
//   6: []
// }

// function aShortestPath(start, end) {
//   const currentPath = [start]
//   const visited = new Set([start]);
//   const queue = [currentPath];

//   while (queue.length > 0) {
//     const [current] = queue.shift();

//     if (current === end) return [current];

//     for (let neighbor of adjList[current]) {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         queue.push([neighbor]);
//       }
//     }
//   }
//   return false;
//   }

// console.log("First Test:");
// console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false

/******************************************************************************/
// const matrix = [
//   [ 0, 1, 0, 0, 1 ],
//   [ 1, 0, 0, 0, 1 ],
//   [ 1, 1, 0, 1, 1 ],
//   [ 0, 1, 1, 0, 0 ],
//   [ 0, 0, 0, 0, 0 ]
// ];

// function getNeighbors(node, matrix) {
//   // Create an array to hold the valid neighbors
//   let neighbors = [];
//   const nodeRow = node[0];
//   const nodeColumn = node[1];

//   // UP:
//       // Identify the node above the current node, if it exists
//       if (nodeRow - 1 && nodeRow -1 >= 0) {
//         const upNeighbor = [nodeRow - 1, nodeColumn];
//         // Push that node into the new array
//         neighbors.push(upNeighbor);
//       }

//   // DOWN:
//       // Identify the node below the current node, if it exists
//       if (nodeRow + 1 && nodeRow + 1 < matrix.length) {
//         const downNeighbor = [nodeRow + 1, nodeColumn];
//         // Push that node into the new array
//         neighbors.push(downNeighbor);
//       }

//   // LEFT:
//       // Identify the node to the left of the current node, if it exists
//       if (nodeColumn - 1 && nodeColumn - 1 >= 0) {
//         const leftNeighbor = [nodeRow, nodeColumn - 1];
//         // Push that node into the new array
//         neighbors.push(leftNeighbor);
//       }

//   // RIGHT:
//       // Identify the node to the right of the current node, if it exists
//       if (nodeColumn + 1 && nodeColumn + 1 < matrix[nodeRow].length) {
//         const rightNeighbor = [nodeRow, nodeColumn + 1];
//         // Push that node into the new array
//         neighbors.push(rightNeighbor);
//       }

//   // Return the neighbors array
//   return neighbors;
// }

// // returns the correct neighbors from an internal node
// console.log(getNeighbors([2,2], matrix)) // returns [ [1,2], [3,2], [2,1], [2,3] ]

// // returns the correct neighbors from a corner node
// console.log(getNeighbors([0,0], matrix)) // returns [ [1,0], [0,1] ]

// // returns the correct neighbors from an edge node
// console.log(getNeighbors([2,0], matrix)) // returns [ [1,0], [3,0], [2,1] ]
/******************************************************************************/
// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
// let a = new TreeNode('a');
// let b = new TreeNode('b');
// let c = new TreeNode('c');
// let d = new TreeNode('d');
// let e = new TreeNode('e');
// let f = new TreeNode('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

/******************************************************************************/
//COUNTING ISLANDS FROM ALVIN'S CODE.
const numIslands = function(grid) {
  const visited = new Set();
  let count = 0;

  for (let r = 0; r < grid.length; r += 1) {
      for (let c = 0; c < grid[0].length; c += 1) {
          if (explore(grid, r, c, visited) === true) {
              count += 1;
          }
      }
  }
  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length;
  const colInbounds = 0 <= c && c < grid[0].length;
  if (!rowInbounds || !colInbounds) return false;

  if (grid[r][c] === '0') return false;

  const pos = r + ',' + c;
  if (visited.has(pos)) return false;
  visited.add(pos);

  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);

  return true;
}
