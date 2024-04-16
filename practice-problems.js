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

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }
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

  console.log("First Test:")
  printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                      // One possible solution:  3, 4, 6, 5, 1, 2
  console.log("Second Test:")
  printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                      // One possible solution:  6, 4, 5, 2, 1, 3
  console.log("Third Test:")
  printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                      // One possible solution:  4, 6, 5, 2, 1, 3

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

/******************************************************************************/

//hasPath function, returns true if there is a path from the source to the destination, false if not (so far we have not done any cyclical stuff)

// const hasPath = (graph, src, dst) => {//depth first with recursion
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
