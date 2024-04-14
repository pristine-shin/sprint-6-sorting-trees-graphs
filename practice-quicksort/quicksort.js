function quicksort(arr) {

  // Check if the input is length 1 or less
  if (arr.length < 2) return arr;
    // If so, it's already sorted: return

  // Pick the first value as the pivot
  let pivot = arr[0];
  let left = [];
  let right = [];

  // Orient the pivot so that...
  for (let i = 1; i < arr.length; i++) {
    // every number smaller than the pivot is to the left
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    // every number larger (or equal) than the pivot is to the right
    if (arr[i] >= pivot) {
      right.push(arr[i]);
    }
  }

  // Recursively sort the left (skipped put in final return)
  // Recursively sort the right (skipped put in final return)

  // Return the recursively sorted left, pivot and recursively sorted right in sorted order
  return [...quicksort(left), pivot, ...quicksort(right)];
}


module.exports = [quicksort];
