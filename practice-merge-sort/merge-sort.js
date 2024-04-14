// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  if (arr.length < 2) {
    // If so, it's already sorted: return
    return arr;
  }
  // Divide the array in half
  let left = arr.slice(0, Math.floor(arr.length/2))
  let right = arr.slice(Math.floor(arr.length/2));

  // Recursively sort the left half
    //mergeSort(left)
  // Recursively sort the right half
    //mergeSort(right)

  // Merge the halves together and return
  return merge(mergeSort(left), mergeSort(right));//skips previous two steps for concision
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let result = [];

  // Point to the first value of each array
  // While there are still values in each array...
  while (arrA.length && arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[0] < arrB[0]) {
      result.push(arrA.shift());
    } else {
      result.push(arrB.shift());
    }
  }
  return [...result, ...arrA, ...arrB];
  // Return the return array

}

module.exports = [merge, mergeSort];
