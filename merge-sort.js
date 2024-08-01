// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // check if the input is length 1 or less
  if (arr.length <= 1) {
    // if so, it's already sorted: return
    return arr;
  }

  // divide the array in half
  const mid = Math.floor(arr.length / 2);

  // recursively sort left half
  const left = mergeSort(arr.slice(0, mid));

  // recursively sort right half
  const right = mergeSort(arr.slice(mid));

  // merge the halves together and return
  return merge(left, right);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // create an empty return array
  let result = [];

  // point to the first value of each array
  let i = 0;
  let j = 0;

  // while there are still values in each array...
  while (i < arrA.length && j < arrB.length) {
    // compare the first values of each array
    if (arrA[i] < arrB[j]) {
      // add the smaller value to the return array
      result.push(arrA[i]);
      // move the pointer to the next value in that array
      i++;
    } else {
      result.push(arrB[j]);
      j++;
    }
  }

  // concatenate remaining elements (one of these will be empty)
  return result.concat(arrA.slice(i)).concat(arrB.slice(j));
}

module.exports = [merge, mergeSort];
