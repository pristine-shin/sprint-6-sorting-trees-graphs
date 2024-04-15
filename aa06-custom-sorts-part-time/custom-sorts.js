function ageSort(users) {
  // Your code here
  return users.sort(function(a, b) {
    return a.age - b.age
  });
}

function oddEvenSort(arr) {
  // Your code here
  return arr.sort(function (a, b) {
    if (a % 2 === 1 && b % 2 === 0) return -1;
    if (a % 2 === 0 && b % 2 === 1) return 1;
    return a - b;
  });
}

function validAnagrams(s, t) {
  // Your code here
  let arr1 = s.split('');
  let arr2 = t.split('');

  let arr1Sorted = arr1.sort();
  let arr2Sorted = arr2.sort();

  return (arr1Sorted.join('') === arr2Sorted.join(''));
}

function reverseBaseSort(arr) {
  return arr.sort((a, b) => {
    // console.log(a, a.toString().length)
    if (a.toString().length === b.toString().length) {
      return a - b
    }
    return b - a
  });
}

function frequencySort(arr) {
  // Your code here
  const counts = {};

  arr.forEach(num => {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  });

  return arr.sort((a, b) => {
    if (counts[a] === counts[b]) {
      return b - a;
    }
    return counts[a] - counts[b];
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
